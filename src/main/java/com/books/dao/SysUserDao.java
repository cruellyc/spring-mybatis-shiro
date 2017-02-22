package com.books.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.books.entity.SysUser;


/**
 *
 * @author  liyc
 * @date 2017年2月21日 上午10:51:03
*/
@Repository
public interface SysUserDao {
	SysUser getUser(@Param("username")String username);

	List<SysUser> selectByMap(Map<String, Object> map);

	void updateById(SysUser user);
}
