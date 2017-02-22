package com.books.entity;

import java.io.Serializable;

/**
 *
 * @author  liyc
 * @date 2017年2月20日 上午11:43:21
*/
public class SysUserRole implements Serializable{

    private static final long serialVersionUID = 1L;

	private String id;
    /**
     * 用户ID
     */
	private String uid;
    /**
     * 角色ID
     */
	private String rid;


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

}
