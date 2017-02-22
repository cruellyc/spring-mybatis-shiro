package com.books.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.dao.SysPermissionInitDao;
import com.books.entity.SysPermissionInit;

/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午2:00:51
*/
@Service
public class SysPermissionInitService{
	private Logger logger = Logger.getLogger(this.getClass());

	@Autowired
	SysPermissionInitDao sysPermissionInitDao;
	public List<SysPermissionInit> selectAll() {
		logger.debug("selectAll");
		return sysPermissionInitDao.selectAll();
	}
}