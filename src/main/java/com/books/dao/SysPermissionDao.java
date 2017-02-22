package com.books.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.books.entity.SysPermission;

/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午1:54:54
*/
@Repository
public interface SysPermissionDao {

	List<SysPermission> selectByMap(Map<String, Object> map);

}