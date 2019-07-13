/*
Navicat MySQL Data Transfer

Source Server         : panpan
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : 360market

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-07-13 17:16:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `market`
-- ----------------------------
DROP TABLE IF EXISTS `market`;
CREATE TABLE `market` (
  `picd` tinyint(1) NOT NULL,
  `url` varchar(200) NOT NULL,
  `title` varchar(300) NOT NULL,
  `price` float(7,2) NOT NULL,
  `imgurls` varchar(999) NOT NULL,
  PRIMARY KEY (`picd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of market
-- ----------------------------
INSERT INTO `market` VALUES ('1', 'http://p3.qhimg.com/dr/400_400_80/t01a04ff3b395e54d5c.png', '60儿童手表P1 ', '699.00', 'https://p.ssl.qhmsg.com/t01a04ff3b395e54d5c.png,https://p.ssl.qhmsg.com/t011b9d123e4f60a89a.png,https://p.ssl.qhmsg.com/t013c990756d2cda5e2.png,https://p.ssl.qhmsg.com/t01e3c9a97ea6479d99.png,https://p.ssl.qhmsg.com/t0185c1da69683ae56b.png,https://p.ssl.qhmsg.com/t012879be242eb418db.png');
INSERT INTO `market` VALUES ('2', 'https://p.ssl.qhimg.com/dr/400_400_80/t01293833028d948177.jpg', '翻翻风扇便携式小型电风扇', '45.00', '');
INSERT INTO `market` VALUES ('3', 'https://p.ssl.qhimg.com/dr/400_400_80/t01bfb3aff506d275c5.png', '360儿童手表SE3 樱花粉', '169.00', '');
INSERT INTO `market` VALUES ('4', 'https://p.ssl.qhimg.com/dr/400_400_80/t016bf715eca407a639.png', '智能语音车载MP3蓝牙播放器', '129.00', '');
INSERT INTO `market` VALUES ('5', 'https://p.ssl.qhimg.com/dr/400_400_80/t013b92e37745cae5b9.png', '桑代双层化妆品收纳盒灰色', '35.00', '');
INSERT INTO `market` VALUES ('6', 'https://p.ssl.qhimg.com/dr/400_400_80/t01913fdd02473c4379.png', '桑代led灯椭圆化妆镜玫瑰金', '55.00', '');
INSERT INTO `market` VALUES ('7', 'https://p.ssl.qhimg.com/dr/400_400_80/t01df16b214d55214b8.png', '桑代硅藻泥脚垫绿色', '49.00', '');
INSERT INTO `market` VALUES ('8', 'https://p.ssl.qhimg.com/dr/400_400_80/t01294a0ea0f3480a7f.jpg', '桑代无痕吸盘挂钩透明10个装', '30.00', '');
INSERT INTO `market` VALUES ('9', 'https://p.ssl.qhimg.com/dr/400_400_80/t01aaf2da4cfbb183e5.png', '桑代空调伸缩挡风板挂机', '49.00', '');
INSERT INTO `market` VALUES ('10', 'https://p.ssl.qhimg.com/dr/400_400_80/t01c52a1d9d2b93f19a.jpg', '桑代折叠式鞋盒透明白', '99.00', '');
INSERT INTO `market` VALUES ('11', 'https://p.ssl.qhimg.com/dr/400_400_80/t01334941d4d0b32aba.jpg', '桑代塑料便携式拉杆购物车', '89.00', '');
INSERT INTO `market` VALUES ('12', 'http://p1.qhimg.com/dr/400_400_80/t0125c455bf88945d97.png', '360扫地机器人S7', '29.00', '');
INSERT INTO `market` VALUES ('13', 'https://p.ssl.qhimg.com/dr/400_400_80/t01ae528f54e2163b79.jpg', '学习 学生平板电脑', '3999.00', '');
INSERT INTO `market` VALUES ('14', 'https://p.ssl.qhimg.com/dr/400_400_80/t01ef766d91db4cd979.jpg', '电子笔记本电子书阅读器', '4999.00', '');
INSERT INTO `market` VALUES ('15', 'https://p.ssl.qhimg.com/dr/400_400_80/t01dd2b7116b9808471.jpg', '头戴式耳机 影子黑', '1692.00', '');
INSERT INTO `market` VALUES ('16', 'https://p.ssl.qhimg.com/dr/400_400_80/t01b79270592fbc036f.jpg', '无线蓝牙头戴式耳机', '2482.00', '');
INSERT INTO `market` VALUES ('17', 'https://p.ssl.qhimg.com/dr/400_400_80/t0132c42691c8ecc72d.jpg', '咚咚（dongdong）M2智能语音', '99.00', '');
INSERT INTO `market` VALUES ('18', 'http://p3.qhimg.com/dr/400_400_80/t017b064cd0a22c1aae.png', 'M2智能语音车载MP3蓝牙播放器', '99.00', '');
INSERT INTO `market` VALUES ('19', 'https://p.ssl.qhimg.com/dr/400_400_80/t013378d27053a14337.jpg', '无线蓝牙迷你音箱', '1360.00', '');
INSERT INTO `market` VALUES ('20', 'https://p.ssl.qhimg.com/dr/400_400_80/t01a86b6f41932189b2.jpg', '不锈钢保温杯', '108.00', '');

-- ----------------------------
-- Table structure for `person`
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `name` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('12345678', '7c222fb2927d828af22f592134e8932480637c0d', '2019-07-11 10:26:27');
INSERT INTO `person` VALUES ('188156869', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '2019-07-11 09:06:14');
INSERT INTO `person` VALUES ('18815686962', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '2019-07-11 09:05:37');
INSERT INTO `person` VALUES ('18844996694', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2019-07-10 20:24:53');
INSERT INTO `person` VALUES ('panpan', '51eac6b471a284d3341d8c0c63d0f1a286262a18', '2019-07-10 20:32:42');
