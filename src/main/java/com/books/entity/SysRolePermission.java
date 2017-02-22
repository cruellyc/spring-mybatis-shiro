package com.books.entity;

import java.io.Serializable;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 上午11:46:04
*/
public class SysRolePermission implements Serializable {

    private static final long serialVersionUID = 1L;

	private String id;
    /**
     * 角色ID
     */
	private String rid;
    /**
     * 权限ID
     */
	private String pid;


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

}