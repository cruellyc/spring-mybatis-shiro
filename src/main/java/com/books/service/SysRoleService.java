package com.books.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.dao.SysRoleDao;
import com.books.entity.SysRole;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午1:59:29
*/
@Service
public class SysRoleService {

	@Autowired
	private SysRoleDao sysRoleDao;
	public List<SysRole> selectByMap(Map<String, Object> map) {
		return sysRoleDao.selectByMap(map);
	}
	
}