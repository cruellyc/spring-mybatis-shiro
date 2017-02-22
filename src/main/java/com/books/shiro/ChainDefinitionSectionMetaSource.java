package com.books.shiro;

import java.text.MessageFormat;
import java.util.Iterator;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.shiro.config.Ini;
import org.apache.shiro.config.Ini.Section;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;

import com.books.entity.SysPermissionInit;
import com.books.service.SysPermissionInitService;

/**
 *
 * @author liyc
 * @date 2017年2月21日 下午3:31:31
 */
public class ChainDefinitionSectionMetaSource implements FactoryBean<Ini.Section> {
	private Logger logger = Logger.getLogger(this.getClass());
	@Autowired
	private SysPermissionInitService sysPermissionInitService;

	private String filterChainDefinitions;

	/**
	 * 默认premission字符串
	 */
	public static final String PREMISSION_STRING = "perms[\"{0}\"]";

	public Section getObject() throws BeansException {
		logger.debug("ChainDefinitionSectionMetaSource start");
		// 从数据库获取
		List<SysPermissionInit> list = sysPermissionInitService.selectAll();

		Ini ini = new Ini();
		// 加载默认的url
		ini.load(filterChainDefinitions);
		Ini.Section section = ini.getSection(Ini.DEFAULT_SECTION_NAME);
		// 循环Resource的url,逐个添加到section中。section就是filterChainDefinitionMap,
		// 里面的键就是链接URL,值就是存在什么条件才能访问该链接
		for (Iterator<SysPermissionInit> it = list.iterator(); it.hasNext();) {
			SysPermissionInit resource = it.next();
			// 如果不为空值添加到section中
			if (resource.getUrl() != null && resource.getPermissionInit() != null) {
				section.put(resource.getUrl(), MessageFormat.format(PREMISSION_STRING, resource.getPermissionInit()));
			}

		}
		logger.debug("ChainDefinitionSectionMetaSource end");
		return section;
	}

	/**
	 * 通过filterChainDefinitions对默认的url过滤定义
	 * 
	 * @param filterChainDefinitions
	 *            默认的url过滤定义
	 */
	public void setFilterChainDefinitions(String filterChainDefinitions) {
		this.filterChainDefinitions = filterChainDefinitions;
	}

	public Class<?> getObjectType() {
		return this.getClass();
	}

	public boolean isSingleton() {
		return false;
	}

	public SysPermissionInitService getSysPermissionInitService() {
		return sysPermissionInitService;
	}

	public void setSysPermissionInitService(SysPermissionInitService sysPermissionInitService) {
		this.sysPermissionInitService = sysPermissionInitService;
	}

}
