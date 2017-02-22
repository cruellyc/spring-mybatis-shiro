package com.books.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.books.common.JSONP;
import com.books.service.SysUserService;
import com.books.shiro.ShiroToken;




/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午2:46:44
*/
@Controller
@RequestMapping("sysUser")
public class SysUserCtl {
	private Logger logger = Logger.getLogger(this.getClass());
	@Autowired
	SysUserService sysUserService;

	@RequestMapping(value="login",method=RequestMethod.GET)
	@ResponseBody
	public JSONP<String> login(@RequestParam(value="callback",required=false)String callback,
			@RequestParam(value="username",required=true)String username,
			@RequestParam(value="password",required=true)String password) {
		logger.debug("login start");
		int i=sysUserService.login(username, password);
		if(i>0){
			logger.debug("login end");
			return new JSONP<String>(callback, "登录成功");
		}else{
			logger.debug("login end");
			return new JSONP<String>(callback,"登录失败",false);
		}
	}

	
	
	/**
	 * ajax登录请求
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping(value="submitLogin",method=RequestMethod.GET)
	@ResponseBody
	public JSONP<String> submitLogin(@RequestParam(value="callback",required=false)String callback,
			@RequestParam(value="username",required=true)String username,
			@RequestParam(value="password",required=true)String password) {

		int i=sysUserService.submitLogin(username, password);
		if(i>0){
			return new JSONP<String>(callback, "登录成功");
		}else{
			return new JSONP<String>(callback,"登录失败",false);
		}
	}
	/**
	 * ajax登录请求
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping(value="ajaxLogin",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> submitLogin(String username, String password,Model model) {
		Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
		try {
			ShiroToken token = new ShiroToken(username, password);
			SecurityUtils.getSubject().login(token);
			resultMap.put("status", 200);
			resultMap.put("message", "登录成功");

		} catch (Exception e) {
			resultMap.put("status", 500);
			resultMap.put("message", e.getMessage());
		}
		return resultMap;
	}
	
	/**
	 * 退出
	 * @return
	 */
	@RequestMapping(value="logout",method =RequestMethod.GET)
	@ResponseBody
	public String logout(){
		try {
			//退出
			SecurityUtils.getSubject().logout();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return "login";
	}
	@RequestMapping(value="index")
	public String index() {
		return "index";
	}

	@RequestMapping(value="logins")
	public String login() {
		return "login";
	}


	@RequestMapping(value="add")
	public String add() {
		return "add";
	}
	
	@RequestMapping(value="403")
	public String noPermissions() {
		return "403";
	}
}