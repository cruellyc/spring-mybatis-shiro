package com.books.shiro;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.books.entity.SysPermission;
import com.books.entity.SysRole;
import com.books.entity.SysUser;
import com.books.service.SysPermissionService;
import com.books.service.SysRoleService;
import com.books.service.SysUserService;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午2:19:30
*/
public class MyShiroRealm extends AuthorizingRealm {
	private Logger logger = Logger.getLogger(this.getClass());

	//项目启动时还未注入依赖需自己getset出来
	@Autowired
	private SysUserService sysUserService;
	
	@Autowired
	private SysPermissionService sysPermissionService;
	
	@Autowired
	private SysRoleService sysRoleService;
	public SysUserService getSysUserService() {
		return sysUserService;
	}

	public void setSysUserService(SysUserService sysUserService) {
		this.sysUserService = sysUserService;
	}
	
	public SysPermissionService getSysPermissionService() {
		return sysPermissionService;
	}

	public void setSysPermissionService(SysPermissionService sysPermissionService) {
		this.sysPermissionService = sysPermissionService;
	}

	public SysRoleService getSysRoleService() {
		return sysRoleService;
	}

	public void setSysRoleService(SysRoleService sysRoleService) {
		this.sysRoleService = sysRoleService;
	}

	/**
	 * 授权
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		logger.debug("权限认证方法：MyShiroRealm.doGetAuthorizationInfo()");
		SysUser token = (SysUser)SecurityUtils.getSubject().getPrincipal();
		String userId = token.getId();
		SimpleAuthorizationInfo info =  new SimpleAuthorizationInfo();
		//根据用户ID查询角色（role），放入到Authorization里。

		Map<String, Object> map = new HashMap<String, Object>();

		map.put("user_id", userId);

		List<SysRole> roleList = sysRoleService.selectByMap(map);

		Set<String> roleSet = new HashSet<String>();

		for(SysRole role : roleList){

			roleSet.add(role.getType());

		}
		info.setRoles(roleSet);
		//根据用户ID查询权限（permission），放入到Authorization里。

		List<SysPermission> permissionList = sysPermissionService.selectByMap(map);

		Set<String> permissionSet = new HashSet<String>();

		for(SysPermission Permission : permissionList){

			permissionSet.add(Permission.getName());

		}
		info.setStringPermissions(permissionSet);
		return info;
	}

	/**
	 * 认证信息.(身份验证) : Authentication 是用来验证用户身份
	 * 
	 * @param token
	 * @return
	 * @throws AuthenticationException
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		logger.debug("身份认证方法：MyShiroRealm.doGetAuthenticationInfo()");
		ShiroToken token =(ShiroToken) authcToken;
		Map<String,Object> map= new HashMap<>();
		map.put("nickname", token.getUsername());
		map.put("pswd", token.getPswd());
		SysUser user=null;
		List<SysUser> userList=sysUserService.selectByMap(map);
		if(userList.size()!=0){
			user=userList.get(0);
		}
		if(null==user){
			throw new AccountException("账号或密码不正确！");
		}else if(user.getStatus()==0){
			throw new DisabledAccountException("账号已经禁止登录！");
		}else{
			user.setLast_login_time(new Date());
			sysUserService.updateById(user);
		}
		return new SimpleAuthenticationInfo(user, user.getPswd(), getName());
	}
	
	/**
	 * 清空当前用户权限信息
	 */
	public void clearCachedAuthorizationInfo() {
		PrincipalCollection principalCollection = SecurityUtils.getSubject()
				.getPrincipals();
		SimplePrincipalCollection principals = new SimplePrincipalCollection(
				principalCollection, getName());
		super.clearCachedAuthorizationInfo(principals);
	}

	/**
	 * 指定principalCollection 清除
	 */
	public void clearCachedAuthorizationInfo(
			PrincipalCollection principalCollection) {
		SimplePrincipalCollection principals = new SimplePrincipalCollection(
				principalCollection, getName());
		super.clearCachedAuthorizationInfo(principals);
	}

	
	
}
