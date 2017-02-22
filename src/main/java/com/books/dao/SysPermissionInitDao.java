package com.books.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.books.entity.SysPermissionInit;


/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午1:55:24
*/
@Repository
public interface SysPermissionInitDao {

	List<SysPermissionInit> selectAll();

}