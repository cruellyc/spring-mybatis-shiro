package com.books.entity;

import java.io.Serializable;
import java.util.Date;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 上午11:36:02
*/
public class SysUser implements Serializable{

	
	private static final long serialVersionUID=1l;
	private String id;
	private String nickname;//用户昵称
	private String email;//邮箱|登录账号
	private String pswd;//密码
	private Date create_time;//创建时间
	private Date last_login_time;//最后登录时间
	private Long status;//1 有效 0禁止登录
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPswd() {
		return pswd;
	}

	public void setPswd(String pswd) {
		this.pswd = pswd;
	}


	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public Date getLast_login_time() {
		return last_login_time;
	}

	public void setLast_login_time(Date last_login_time) {
		this.last_login_time = last_login_time;
	}

	public Long getStatus() {
		return status;
	}

	public void setStatus(Long status) {
		this.status = status;
	}


}
