/*
MySQL Data Transfer
Source Host: localhost
Source Database: z77z
Target Host: localhost
Target Database: z77z
Date: 2017-02-22 15:49:47
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
CREATE TABLE `sys_permission` (
  `id` varchar(40) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_permission_init
-- ----------------------------
CREATE TABLE `sys_permission_init` (
  `id` varchar(40) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `permission_init` varchar(100) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
CREATE TABLE `sys_role` (
  `id` varchar(40) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
CREATE TABLE `sys_role_permission` (
  `id` varchar(40) NOT NULL,
  `rid` varchar(40) DEFAULT NULL,
  `pid` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
CREATE TABLE `sys_user` (
  `id` varchar(40) NOT NULL,
  `nickname` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `pswd` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
CREATE TABLE `sys_user_role` (
  `id` varchar(40) NOT NULL,
  `uid` varchar(40) DEFAULT NULL,
  `rid` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `sys_permission` VALUES ('1', '/disp/sysuser/login', 'authc');
INSERT INTO `sys_permission_init` VALUES ('1', '/disp/sysUser/login', 'authc', '1');
INSERT INTO `sys_role` VALUES ('1', 'admin', 'admin');
INSERT INTO `sys_role` VALUES ('2', 'guest', 'guest');
INSERT INTO `sys_role_permission` VALUES ('1', '1', '1');
INSERT INTO `sys_user` VALUES ('1', 'admin', 'sss', '123', '2017-02-20 15:39:12', '2017-02-22 15:39:09', '1');
INSERT INTO `sys_user_role` VALUES ('1', '1', '1');
