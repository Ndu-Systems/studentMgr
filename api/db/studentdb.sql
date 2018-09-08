-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2018 at 12:20 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

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
-- Table structure for table `accounting`
--

CREATE TABLE `accounting` (
  `AccointingId` int(11) NOT NULL,
  `Description` varchar(225) NOT NULL,
  `TypeId` int(11) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Month` int(11) NOT NULL,
  `CreateUserdId` int(11) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifyUserId` int(11) NOT NULL,
  `AccountStatus` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 'Human Management N1', 'Human Management Fundimentals', '150', 'Human Resources', '2018-05-27 18:34:16', 'active');

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
(1, 1, 1, '2018-05-27 18:39:39'),
(2, 1, 2, '2018-05-27 18:39:43'),
(3, 1, 3, '2018-06-07 21:00:25');

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
(1, 'Human Resources', '2018-05-27 18:33:37', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `lecture_course_subject`
--

CREATE TABLE `lecture_course_subject` (
  `id` int(11) NOT NULL,
  `lectureId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `Subject` int(11) DEFAULT NULL,
  `Year` date DEFAULT NULL,
  `Status` varchar(225) NOT NULL DEFAULT 'In Progress'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lecture_course_subject`
--

INSERT INTO `lecture_course_subject` (`id`, `lectureId`, `CourseId`, `Subject`, `Year`, `Status`) VALUES
(1, 4, 1, 1, '2018-06-07', 'In Progress'),
(2, 5, 1, 2, '2018-06-07', 'In Progress');

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
-- Table structure for table `student_course_subject`
--

CREATE TABLE `student_course_subject` (
  `id` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` int(11) NOT NULL,
  `Subject` int(11) DEFAULT NULL,
  `Year` date DEFAULT NULL,
  `Status` varchar(225) NOT NULL DEFAULT 'In Progress'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_course_subject`
--

INSERT INTO `student_course_subject` (`id`, `StudentId`, `CourseId`, `Subject`, `Year`, `Status`) VALUES
(1, 2, 1, 3, '2018-05-27', 'In Progress'),
(2, 2, 1, 2, '2018-05-27', 'In Progress'),
(3, 2, 1, 1, '2018-05-27', 'In Progress'),
(4, 3, 1, 3, '2018-05-27', 'In Progress'),
(5, 3, 1, 1, '2018-05-27', 'In Progress'),
(6, 3, 1, 2, '2018-05-27', 'In Progress'),
(7, 5, 1, 1, '2018-05-27', 'In Progress');

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
-- Table structure for table `student_test`
--

CREATE TABLE `student_test` (
  `id` int(10) NOT NULL,
  `studentID` int(10) NOT NULL,
  `testID` int(10) NOT NULL,
  `createdate` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  `marks` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_test`
--

INSERT INTO `student_test` (`id`, `studentID`, `testID`, `createdate`, `status`, `marks`) VALUES
(1, 2, 1, '2018-06-23 10:39:26', 'pending', ''),
(2, 3, 1, '2018-06-23 10:39:26', 'pending', ''),
(11, 5, 1, '2018-06-24 13:24:53', 'pending', '');

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
(1, 'Learning Human Behaviour', '2018-05-27 18:36:38', '20', 'Human Behaviour Behaviour', 'LHB100', 'active'),
(2, 'Religion & Work', '2018-05-27 18:37:14', '20', 'Religion & Work Fundementals', 'RW100', 'active'),
(3, 'Work life Balance', '2018-06-07 21:00:04', '100', 'Finding the perfect balance between work place and personal life', 'WLB18', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `location` text NOT NULL,
  `time` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `tittle` varchar(150) NOT NULL,
  `score` varchar(10) NOT NULL,
  `subjectID` int(10) NOT NULL,
  `lectureID` int(10) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `type`, `date`, `duration`, `location`, `time`, `status`, `tittle`, `score`, `subjectID`, `lectureID`, `createdate`) VALUES
(1, 'Test', '2018-06-15', '2h', 'main hall', '8:00 to 10:00', 'new', 'test 1', '150', 1, 4, '2018-06-23 10:28:06');

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
  `user_nmuber` varchar(20) NOT NULL,
  `token` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `cell`, `address`, `password`, `createdate`, `role`, `country`, `city`, `userstatus`, `idnumber`, `user_nmuber`, `token`) VALUES
(1, 'John', 'Smith', 'John.Smith@btc.edu.za', '0787875141', 'Jacaranda Lane, Panther Road', 'John123', '2018-05-17 19:08:54', 'admin', 'South Africa', 'Durban', 'active', '90888378745363', '', ''),
(2, 'Freedom', 'Khanyile', 'Freedom.Khanyile@ndu-systems.net', '0746958064', 'WestVille', 'John123', 'Khanyile', 'student', '', 'Randburg', 'active', '01254585478564', '', 'cbac233c34fe50e82c9c4c81075a0fa7'),
(3, 'Ndumiso', 'Ndlovu', 'Ndumiso.Ndlovu@mail.com', '0769580644', 'Drum - Bos', 'John123', 'Ndlovu', 'student', '', 'Bisho', 'active', '2422588466887', '', ''),
(4, 'Smiso', 'Mokoena', 'Simo.Ngqulunga@teaching.com', '0746969969', 'Boksruin 999', 'John123', 'Ngqulunga', 'lecture', '', 'Randburg', 'active', '92082558466858', '', ''),
(5, 'Zinhle', 'Mbele', 'Zinhle.Mbele@teaching.com', '0762258468', 'Kaya Sands', 'Mbele', '2018-06-07 20:34:40', 'student', '', 'Cosmo City', 'active', '92075512668468', '', '');

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
-- Indexes for table `lecture_course_subject`
--
ALTER TABLE `lecture_course_subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_course_subject`
--
ALTER TABLE `student_course_subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_test`
--
ALTER TABLE `student_test`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `course_subject`
--
ALTER TABLE `course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lecture_course_subject`
--
ALTER TABLE `lecture_course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_course_subject`
--
ALTER TABLE `student_course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student_test`
--
ALTER TABLE `student_test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
