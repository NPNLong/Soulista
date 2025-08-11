-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: soulista_new
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shop_id` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text,
  `image_path` varchar(255) DEFAULT NULL,
  `original_price` decimal(12,2) DEFAULT NULL,
  `current_price` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  KEY `ix_product_id` (`id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,31,'Cua Hoàng Đế Hấp','Cua hoàng đế tươi sống hấp chín giữ nguyên vị ngọt tự nhiên.','/images/product/31/1.jpg',2800000.00,2500000.00),(2,31,'Ghẹ Rang Muối','Ghẹ tươi rang muối thơm lừng, vỏ giòn thịt ngọt.','/images/product/31/2.jpg',350000.00,320000.00),(3,31,'Sò Điệp Nướng Mỡ Hành','Sò điệp tươi nướng mỡ hành béo ngậy.','/images/product/31/3.jpg',180000.00,160000.00),(4,31,'Hàu Sữa Nướng Phô Mai','Hàu sữa nướng với phô mai thơm béo, bổ dưỡng.','/images/product/31/4.jpg',200000.00,180000.00),(5,31,'Tôm Hùm Nướng Bơ Tỏi','Tôm hùm loại 1 nướng bơ tỏi thơm lừng.','/images/product/31/5.jpg',1500000.00,1400000.00),(6,31,'Lẩu Hải Sản Tổng Hợp','Lẩu hải sản đa dạng nguyên liệu, nước dùng chua ngọt.','/images/product/31/6.jpg',600000.00,550000.00),(7,32,'Bề Bề Rang Muối','Bề bề tươi, rang muối đậm đà vị biển.','/images/product/32/1.jpg',400000.00,370000.00),(8,33,'Mực Ống Nướng Sa Tế','Mực ống tươi, nướng sa tế cay nồng.','/images/product/33/1.jpg',350000.00,330000.00),(9,39,'Vòng Ngọc Trai Trắng','Vòng tay ngọc trai trắng tự nhiên cao cấp.','/images/product/39/1.jpg',7500000.00,7200000.00),(10,40,'Chả Mực Hạ Long','Đặc sản chả mực giã tay truyền thống Hạ Long.','/images/product/40/1.jpg',500000.00,480000.00),(11,42,'Phở Bò Tái Lăn','Phở bò tái lăn đặc trưng Phở Thìn.','/images/product/42/1.jpg',70000.00,70000.00),(12,42,'Phở Bò Chín','Phở bò chín nước dùng đậm đà.','/images/product/42/2.jpg',65000.00,65000.00),(13,42,'Phở Bò Gầu','Phở bò gầu béo ngậy.','/images/product/42/3.jpg',75000.00,75000.00),(14,42,'Phở Bò Tái Nạm Gầu','Phở bò tái nạm gầu đầy đủ topping.','/images/product/42/4.jpg',80000.00,80000.00),(15,42,'Quẩy Nóng','Quẩy nóng giòn ăn kèm phở.','/images/product/42/5.jpg',15000.00,15000.00),(16,42,'Trà Đá','Trà đá mát lạnh dùng kèm.','/images/product/42/6.jpg',5000.00,5000.00),(17,43,'Bánh Cuốn Thanh Trì','Bánh cuốn mỏng mềm, nhân thịt thơm.','/images/product/43/1.jpg',35000.00,35000.00),(18,46,'Khăn Lụa Tơ Tằm','Khăn lụa tơ tằm cao cấp, mềm mại.','/images/product/46/1.jpg',1200000.00,1100000.00),(19,47,'Chả Cá Lã Vọng','Chả cá truyền thống ăn kèm bún, rau thơm.','/images/product/47/1.jpg',220000.00,220000.00),(20,48,'Bún Chả Đặc Biệt','Bún chả đầy đủ chả nướng, thịt ba chỉ.','/images/product/48/1.jpg',60000.00,60000.00),(21,49,'Lọ Hoa Lụa Trang Trí','Hoa lụa cao cấp trang trí nội thất.','/images/product/49/1.jpg',500000.00,480000.00),(22,50,'USDA Prime Ribeye Steak','Ribeye bò Mỹ cao cấp nướng chuẩn vị Argentina.','/images/product/50/1.jpg',1200000.00,1200000.00),(23,56,'Bánh Đa Cua Hải Phòng','Đặc sản bánh đa cua truyền thống.','/images/product/56/1.jpg',50000.00,50000.00),(24,57,'Vỏ Sò Trang Trí','Vỏ sò biển làm quà lưu niệm.','/images/product/57/1.jpg',150000.00,140000.00),(25,58,'Bình Hoa Gốm Men Lam','Bình hoa gốm sứ men lam cao cấp.','/images/product/58/1.jpg',900000.00,880000.00),(26,58,'Ấm Trà Gốm Bát Tràng','Ấm trà gốm Bát Tràng chính hiệu.','/images/product/58/2.jpg',700000.00,680000.00),(27,58,'Lộc Bình Men Rạn','Lộc bình men rạn phong thủy.','/images/product/58/3.jpg',2500000.00,2400000.00),(28,58,'Đĩa Trang Trí Gốm','Đĩa trang trí gốm họa tiết truyền thống.','/images/product/58/4.jpg',350000.00,340000.00),(29,58,'Chum Rượu Gốm','Chum rượu gốm nâu men bóng.','/images/product/58/5.jpg',600000.00,580000.00),(30,58,'Tượng Nghệ Thuật Gốm','Tượng trang trí gốm sứ nghệ thuật.','/images/product/58/6.jpg',1500000.00,1450000.00),(31,59,'Nem Cua Bể','Nem cua bể Hải Phòng chuẩn vị.','/images/product/59/1.jpg',120000.00,120000.00),(32,60,'Sườn Nướng Nam Bộ','Sườn heo nướng phong cách Nam Bộ.','/images/product/60/1.jpg',200000.00,190000.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `shop_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `shop_id` (`shop_id`),
  KEY `ix_rating_id` (`id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `join_date` date DEFAULT NULL,
  `avatar_path` varchar(255) DEFAULT NULL,
  `images` text,
  `price_range` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `description` text,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `weekly_points` int DEFAULT NULL,
  `monthly_points` int DEFAULT NULL,
  `contact` text,
  `qr_code_path` varchar(255) DEFAULT NULL,
  `has_sale` tinyint(1) DEFAULT NULL,
  `average_rating` decimal(2,1) DEFAULT '0.0',
  `total_ratings` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ix_shop_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (31,'Nhà Hàng Cua Vàng','2024-03-12','/images/avatar/31.jpg','/images/shop/31/1.jpg','300.000 - 3.000.000 VNĐ','32 Phan Chu Trinh, Bãi Cháy','Hạ Long','Nhà hàng','Nhà hàng nổi tiếng với các món cua và hải sản tươi sống, phục vụ chuyên nghiệp và không gian sang trọng.',20.9510840,107.0437760,230,940,'tel:02033819398, facebook:https://www.facebook.com/cuavanghalong','/images/QR.jpg',1,4.7,420),(32,'Nhà Hàng Hồng Hạnh 3','2024-02-15','/images/avatar/32.jpg','/images/shop/32/1.jpg','150.000 - 500.000 VNĐ','50 Hạ Long, Bãi Cháy','Hạ Long','Nhà hàng','Hồng Hạnh là chuỗi nhà hàng hải sản lâu đời và uy tín ở Hạ Long, nổi bật với món sá sùng, bề bề và hàu nướng.',20.9504900,107.0445500,210,870,'tel:02033828282, facebook:https://www.facebook.com/honghanhhalong','/images/QR.jpg',0,4.5,390),(33,'Nhà Hàng Phương Nam','2024-04-10','/images/avatar/33.jpg','/images/shop/33/1.jpg','200.000 - 700.000 VNĐ','Bến Đoan, Hồng Gai','Hạ Long','Quán ăn','Nhà hàng view biển đẹp, chuyên phục vụ hải sản tươi ngon và các món truyền thống Việt Nam.',20.9542080,107.0863620,180,750,'tel:02033817111, facebook:https://www.facebook.com/phuongnamhalong','/images/QR.jpg',0,4.3,260),(39,'Cửa Hàng Lưu Niệm Hạ Long Pearl','2024-05-12','/images/avatar/39.jpg','/images/shop/39/1.jpg','500.000 - 10.000.000 VNĐ','Đảo Tuần Châu','Hạ Long','Cửa hàng lưu niệm, quà tặng','Cửa hàng chuyên kinh doanh ngọc trai tự nhiên và quà lưu niệm cao cấp tại Hạ Long.',20.9219000,106.9937000,130,500,'tel:02033819999, facebook:https://www.facebook.com/halongpearl','/images/QR.jpg',0,4.8,150),(40,'Cửa Hàng Đặc Sản Hạ Long - Ông Ba','2024-02-28','/images/avatar/40.jpg','/images/shop/40/1.jpg','50.000 - 1.000.000 VNĐ','Số 1 Đường Bến Đoan','Hạ Long','Cửa hàng lưu niệm, quà tặng','Cửa hàng chuyên bán chả mực Hạ Long, sá sùng, hải sản khô và nhiều đặc sản địa phương khác.',20.9540000,107.0850000,140,580,'tel:02033817777','/images/QR.jpg',1,4.6,200),(42,'Quán Phở Thìn','2024-02-20','/images/avatar/42.jpg','/images/shop/42/1.jpg','50.000 - 100.000 VNĐ','13 Lò Đúc, Hai Bà Trưng','Hà Nội','Quán ăn','Phở Thìn là thương hiệu phở bò nổi tiếng với hương vị đậm đà và thịt bò áp chảo đặc trưng.',21.0133000,105.8593200,270,1100,'tel:02438212583, facebook:https://www.facebook.com/phothinhanoi','/images/QR.jpg',0,4.8,890),(43,'Nhà Hàng Quán Ăn Ngon','2024-04-12','/images/avatar/43.jpg','/images/shop/43/1.jpg','100.000 - 300.000 VNĐ','34 Phan Đình Phùng, Ba Đình','Hà Nội','Nhà hàng','Quán Ăn Ngon tái hiện không gian chợ quê với các món dân dã Việt Nam được chế biến tỉ mỉ.',21.0413000,105.8367000,220,870,'tel:02437340043, facebook:https://www.facebook.com/quanangonhanoi','/images/QR.jpg',1,4.5,430),(46,'Cửa Hàng Lụa Vạn Phúc','2024-04-18','/images/avatar/46.jpg','/images/shop/46/1.jpg','100.000 - 5.000.000 VNĐ','Làng Lụa Vạn Phúc, Hà Đông','Hà Nội','Cửa hàng lưu niệm, quà tặng','Cửa hàng lụa Vạn Phúc cung cấp lụa tơ tằm cao cấp, sản phẩm thủ công đặc trưng của Hà Nội.',20.9590000,105.7746000,160,640,'tel:02433553688','/images/QR.jpg',0,4.6,310),(47,'Nhà Hàng Chả Cá Lã Vọng','2024-02-10','/images/avatar/47.jpg','/images/shop/47/1.jpg','150.000 - 400.000 VNĐ','14 Chả Cá, Hoàn Kiếm','Hà Nội','Nhà hàng','Nhà hàng chuyên món chả cá Lã Vọng – một trong những đặc sản lâu đời nổi tiếng Hà Nội.',21.0371500,105.8489300,200,820,'tel:02438251329, facebook:https://www.facebook.com/chacalavonghanoi','/images/QR.jpg',1,4.4,450),(48,'Nhà Hàng Bún Chả Hương Liên','2024-05-05','/images/avatar/48.jpg','/images/shop/48/1.jpg','50.000 - 150.000 VNĐ','24 Lê Văn Hưu, Hai Bà Trưng','Hà Nội','Quán ăn','Bún chả Hương Liên từng đón Tổng thống Mỹ Barack Obama và đầu bếp Anthony Bourdain, nổi tiếng với bún chả truyền thống Hà Nội.',21.0186800,105.8519200,250,980,'tel:02439438564, facebook:https://www.facebook.com/BunChaHuongLien','/images/QR.jpg',1,4.7,620),(49,'Cửa Hàng Hoa Lụa Anh Đào','2024-03-10','/images/avatar/49.jpg','/images/shop/49/1.jpg','50.000 - 1.000.000 VNĐ','25 Hàng Gai, Hoàn Kiếm','Hà Nội','Cửa hàng lưu niệm, quà tặng','Cửa hàng chuyên hoa lụa, quà tặng và đồ trang trí tinh tế nằm tại khu phố cổ Hà Nội.',21.0340000,105.8509000,140,560,'tel:02438254466','/images/QR.jpg',0,4.3,210),(50,'Nhà Hàng El Gaucho Steakhouse','2024-02-25','/images/avatar/50.jpg','/images/shop/50/1.jpg','400.000 - 1.200.000 VNĐ','11 Tràng Tiền, Hoàn Kiếm','Hà Nội','Nhà hàng','El Gaucho Steakhouse phục vụ steak chuẩn vị Argentina, nổi tiếng với thịt bò cao cấp và rượu vang hảo hạng.',21.0259000,105.8557000,190,780,'tel:02438260407, facebook:https://www.facebook.com/elgauchovietnam','/images/QR.jpg',0,4.5,330),(56,'Nhà Hàng Cát Bi','2024-01-25','/images/avatar/56.jpg','/images/shop/56/1.jpg','100.000 - 350.000 VNĐ','15 Lê Hồng Phong, Ngô Quyền','Hải Phòng','Nhà hàng','Chuyên các món ăn đặc sản Hải Phòng như bánh đa cua, bún cá cay và chả cá thu.',20.8445000,106.6901000,160,630,'tel:02253876543','/images/QR.jpg',1,4.2,210),(57,'Cửa Hàng Quà Lưu Niệm Cảng Biển','2024-04-15','/images/avatar/57.jpg','/images/shop/57/1.jpg','50.000 - 2.000.000 VNĐ','12 Lạch Tray, Ngô Quyền','Hải Phòng','Cửa hàng lưu niệm, quà tặng','Chuyên các sản phẩm quà lưu niệm về biển, vỏ sò, tranh thêu và quà tặng địa phương.',20.8470000,106.6935000,140,560,'tel:02253456789','/images/QR.jpg',0,4.3,200),(58,'Cửa Hàng Gốm Sứ Hải Phòng','2024-02-18','/images/avatar/58.jpg','/images/shop/58/1.jpg','80.000 - 5.000.000 VNĐ','22 Nguyễn Văn Linh, Lê Chân','Hải Phòng','Cửa hàng lưu niệm, quà tặng','Chuyên cung cấp các sản phẩm gốm sứ, đồ trang trí nội thất và quà lưu niệm.',20.8538000,106.6746000,150,590,'tel:02253987654','/images/QR.jpg',0,4.5,220),(59,'Cửa Hàng Đặc Sản Đất Cảng','2024-03-05','/images/avatar/59.jpg','/images/shop/59/1.jpg','30.000 - 1.500.000 VNĐ','9 Cầu Đất, Ngô Quyền','Hải Phòng','Quán ăn','Chuyên các đặc sản Hải Phòng như nem cua bể, bánh đa cua, hải sản khô và nước mắm địa phương.',20.8595000,106.6887000,160,610,'tel:02253876512','/images/QR.jpg',1,4.6,240),(60,'Nhà Hàng Làng Nướng Nam Bộ','2024-05-22','/images/avatar/60.jpg','/images/shop/60/1.jpg','150.000 - 500.000 VNĐ','45 Lê Lợi, Ngô Quyền','Hải Phòng','Nhà hàng','Không gian rộng rãi, phục vụ các món nướng đặc trưng Nam Bộ và hải sản địa phương.',20.8583000,106.6855000,170,640,'tel:02253457890, facebook:https://www.facebook.com/langnuongnambohaiphong','/images/QR.jpg',1,4.4,250);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `join_date` date DEFAULT NULL,
  `avatar_path` varchar(500) DEFAULT NULL,
  `images` varchar(1000) DEFAULT NULL,
  `price_range` varchar(100) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `weekly_points` int DEFAULT NULL,
  `monthly_points` int DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `qr_code_path` varchar(500) DEFAULT NULL,
  `has_sale` tinyint(1) DEFAULT NULL,
  `average_rating` float DEFAULT NULL,
  `total_ratings` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_shops_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `shop_id` int DEFAULT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `shop_id` (`shop_id`),
  KEY `ix_transaction_id` (`id`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `points` int DEFAULT NULL,
  `member_rank` varchar(50) DEFAULT NULL,
  `checked_in_today` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `ix_user_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','12345','Nguyễn Long','2005-10-18','male','0943579636',9830100,'Kim cương',1),(3,'aaaaa','11111','Phuong',NULL,NULL,'1223',100,'Đồng',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_voucher`
--

DROP TABLE IF EXISTS `user_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_voucher` (
  `voucher_id` int NOT NULL,
  `user_id` int NOT NULL,
  `used` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`voucher_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_voucher_ibfk_1` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`id`),
  CONSTRAINT `user_voucher_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_voucher`
--

LOCK TABLES `user_voucher` WRITE;
/*!40000 ALTER TABLE `user_voucher` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voucher`
--

DROP TABLE IF EXISTS `voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voucher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shop_id` int DEFAULT NULL,
  `sale_percent` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  `saved_count` int DEFAULT NULL,
  `used_count` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  KEY `ix_voucher_id` (`id`),
  CONSTRAINT `voucher_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voucher`
--

LOCK TABLES `voucher` WRITE;
/*!40000 ALTER TABLE `voucher` DISABLE KEYS */;
/*!40000 ALTER TABLE `voucher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-11 19:44:09
