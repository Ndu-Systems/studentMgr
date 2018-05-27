-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2018 at 02:20 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(10) NOT NULL,
  `tittle` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `credits` varchar(50) NOT NULL,
  `department` varchar(255) NOT NULL,
  `createdate` datetime NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `tittle`, `description`, `credits`, `department`, `createdate`, `status`) VALUES
(1, 'Cumputer Science  N1', 'introduction to computer science', '120', 'Information technology', '2018-05-02 00:00:00', 'active'),
(6, 'artificial intelligence', 'artificial intelligence', '260', 'Information technology', '2018-05-26 10:16:30', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `course_subject`
--

CREATE TABLE `course_subject` (
  `id` int(11) NOT NULL,
  `courseID` int(11) NOT NULL,
  `subjectID` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_subject`
--

INSERT INTO `course_subject` (`id`, `courseID`, `subjectID`, `createdate`) VALUES
(1, 6, 1, '2018-05-26 00:00:00'),
(2, 6, 3, '2018-05-26 00:00:00'),
(3, 6, 5, '2018-05-02 00:00:00'),
(5, 6, 4, '2018-05-26 17:02:15'),
(6, 1, 4, '2018-05-26 17:09:26'),
(7, 1, 3, '2018-05-26 17:11:18'),
(8, 1, 5, '2018-05-26 17:11:27');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `startdate` datetime NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `startdate`, `status`) VALUES
(1, 'Information technology', '2018-05-02 00:00:00', 'active'),
(2, 'Economics', '2018-05-17 19:31:09', 'active'),
(3, 'Economics Post grad', '2018-05-26 09:23:40', 'active'),
(4, 'Health Science ', '2018-05-26 09:27:49', 'active'),
(5, 'Medicine', '2018-05-26 09:47:55', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `module_lecture`
--

CREATE TABLE `module_lecture` (
  `id` int(11) NOT NULL,
  `createdate` datetime NOT NULL,
  `moduleID` int(10) NOT NULL,
  `lectureID` int(10) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_lecture`
--

CREATE TABLE `student_lecture` (
  `id` int(11) NOT NULL,
  `createdate` datetime NOT NULL,
  `moduleID` int(10) NOT NULL,
  `lectureID` int(10) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(10) NOT NULL,
  `tittle` varchar(150) NOT NULL,
  `createdate` datetime NOT NULL,
  `credits` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `code` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `tittle`, `createdate`, `credits`, `description`, `code`, `status`) VALUES
(1, 'Introduction to programming', '2018-05-26 00:00:00', '16', 'Introduction to programming', 'COMP100', 'active'),
(3, 'Introduction to calculus', '2018-05-26 11:05:46', '16', 'Introduction to calculus', 'Math130', 'active'),
(4, 'Economics', '2018-05-26 12:43:28', '16', 'Economics', 'Eco101', 'active'),
(5, 'Comic Books', '2018-05-26 15:41:55', '50', 'Marvel vs DC', 'BMOP', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `duration` varchar(50) NOT NULL,
  `location` text NOT NULL,
  `time` varchar(10) NOT NULL,
  `marks` varchar(10) NOT NULL,
  `status` varchar(20) NOT NULL,
  `tittle` varchar(150) NOT NULL,
  `score` varchar(10) NOT NULL,
  `moduleID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `type`, `date`, `duration`, `location`, `time`, `marks`, `status`, `tittle`, `score`, `moduleID`) VALUES
(1, 'test', '2018-05-02 00:00:00', '2hr', '', '10:30', '100', 'upcomimg', 'Test 1', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cell` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `password` varchar(50) NOT NULL,
  `createdate` text NOT NULL,
  `role` varchar(10) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `userstatus` varchar(20) NOT NULL DEFAULT 'active',
  `idnumber` varchar(20) NOT NULL,
  `user_nmuber` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `password`, `createdate`, `role`, `country`, `city`, `userstatus`, `idnumber`, `user_nmuber`) VALUES
(2, 'Admin', 'Mthembu', 'admin@mail.com', '', '', 'pass', '', 'admin', 'sa', '1', 'active', '', ''),
(3, 'sASa', 'dsd', 'sASa.dsd@btc.edu.za', 'W321214', 'DASD', 'sASa123', '2018-05-17 19:07:42', 'Admin', 'South Africa', '3WEQE', 'active', '', ''),
(4, 'John', 'Smith', 'John.Smith@btc.edu.za', '0787875141', 'Eyethu house', 'John123', '2018-05-17 19:08:54', 'Student', 'South Africa', 'Johanesburg', 'active', '', ''),
(5, 'saS', 'SAsA', '', 'sw2321', 'swqwq', '2018-05-26 12:54:19', 'SAsA', 'student', '', 'ewqewqe', 'active', 'SSAs', ''),
(6, 'saS', 'SAs', '', 'aSAs', 'saS', '2018-05-26 12:56:44', 'SAs', 'student', '', 'SASA', 'active', 'saSA', ''),
(7, 'saS', 'SAs', '', 'aSAs', 'saS', '2018-05-26 12:57:51', 'SAs', 'student', '', 'SASA', 'active', 'saSA', ''),
(8, 'saS', 'SAs', '', 'aSAs', 'saS', '2018-05-26 12:57:58', 'SAs', 'student', '', 'SASA', 'active', 'saSA', ''),
(9, 'saS', 'SAs', '', 'aSAs', 'saS', '2018-05-26 12:58:10', 'SAs', 'student', '', 'SASA', 'active', 'saSA', ''),
(10, 'saS', 'SAs', 'student@mail.com', 'aSAs', 'saS', '2018-05-26 12:59:25', 'SAs', 'student', '', 'SASA', 'active', 'saSA', ''),
(11, 'saSAsdsa', 'dsadsad', 'saSAsdsa.dsadsad@mail.com', 'dsaD', 'DSAd', '2018-05-26 13:02:48', 'dsadsad', 'student', '', 'dsADSA', 'active', 'sadsad', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_subject`
--
ALTER TABLE `course_subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `course_subject`
--
ALTER TABLE `course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
