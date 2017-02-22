package com.books.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.books.entity.SysRole;

/**
 *
 * @author  liyc
 * @date 2017年2月20日 下午1:53:54
*/
@Repository
public interface SysRoleDao {

	List<SysRole> selectByMap(Map<String, Object> map);

}