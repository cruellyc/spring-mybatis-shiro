package com.books.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.dao.SysPermissionDao;
import com.books.entity.SysPermission;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午2:00:25
*/
@Service
public class SysPermissionService {

	@Autowired
	private SysPermissionDao sysPermissionDao;
	public List<SysPermission> selectByMap(Map<String, Object> map) {
		return sysPermissionDao.selectByMap(map);
	}
	
}