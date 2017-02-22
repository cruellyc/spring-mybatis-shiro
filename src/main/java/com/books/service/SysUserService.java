package com.books.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.dao.SysUserDao;
import com.books.entity.SysUser;



/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午1:58:02
*/
@Service
public class SysUserService {
	@Autowired
	private SysUserDao sysUserDao;
	
	public SysUserDao getSysUserDao() {
		return sysUserDao;
	}
	public void setSysUserDao(SysUserDao sysUserDao) {
		this.sysUserDao = sysUserDao;
	}
	public int submitLogin(String username,String password){
		SysUser user=sysUserDao.getUser(username);
		if(user!=null){
			if(user.getPswd().equals(password)){
				return 1;
			}
		}
		return 0;
	}
	public int login(String username,String password){
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("nickname", username);
		map.put("pswd", password);
		List<SysUser> list=sysUserDao.selectByMap(map);
		if(list!=null&&list.size()>0){
			return 1;
		}
		return 0;
	}
	public List<SysUser> selectByMap(Map<String, Object> map) {
		return sysUserDao.selectByMap(map);
	}
	public void updateById(SysUser user) {
		sysUserDao.updateById(user);
		
	}
}