-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2018 at 09:45 AM
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
(1, 'Human Management N1', 'Human Management Fundimentals', '150', 'Human Resources', '2018-05-27 18:34:16', 'active'),
(2, 'Computer Science', 'Computer Science', '250', 'Maths & Science', '2018-06-30 07:44:35', 'active');

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
(1, 'Human Resources', '2018-05-27 18:33:37', 'active'),
(2, 'Maths & Science', '2018-06-30 07:44:12', 'active');

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
(2, 5, 1, 2, '2018-06-07', 'In Progress'),
(3, 9, 1, NULL, '2018-06-25', 'In Progress'),
(4, 9, 1, 1, '2018-06-25', 'In Progress'),
(5, 9, 1, 2, '2018-06-25', 'In Progress'),
(6, 9, 1, 3, '2018-06-25', 'In Progress'),
(7, 10, 1, NULL, '2018-06-25', 'In Progress'),
(8, 10, 1, 1, '2018-06-25', 'In Progress');

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
-- Table structure for table `student_course`
--

CREATE TABLE `student_course` (
  `id` int(11) NOT NULL,
  `studentID` int(11) NOT NULL,
  `courseID` int(11) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_course`
--

INSERT INTO `student_course` (`id`, `studentID`, `courseID`, `createdate`) VALUES
(1, 15, 2, '2018-06-30 09:24:02');

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
(7, 6, 1, NULL, '2018-06-25', 'In Progress'),
(8, 6, 1, 1, '2018-06-25', 'In Progress'),
(9, 6, 1, 2, '2018-06-25', 'In Progress'),
(10, 6, 1, 3, '2018-06-25', 'In Progress'),
(11, 7, 1, NULL, '2018-06-25', 'In Progress'),
(12, 7, 1, 1, '2018-06-25', 'In Progress'),
(13, 7, 1, 2, '2018-06-25', 'In Progress'),
(14, 7, 1, 3, '2018-06-25', 'In Progress'),
(15, 8, 1, NULL, '2018-06-25', 'In Progress'),
(16, 8, 1, 1, '2018-06-25', 'In Progress'),
(17, 8, 1, 2, '2018-06-25', 'In Progress'),
(18, 8, 1, 3, '2018-06-25', 'In Progress'),
(19, 11, 2, NULL, '2018-06-30', 'In Progress'),
(20, 12, 1, NULL, '2018-06-30', 'In Progress'),
(21, 13, 2, NULL, '2018-06-30', 'In Progress');

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
(3, 2, 4, '2018-06-25 22:20:44', 'pending', ''),
(4, 3, 4, '2018-06-25 22:20:44', 'pending', ''),
(5, 6, 4, '2018-06-25 22:20:44', 'pending', ''),
(6, 2, 4, '2018-06-25 22:21:32', 'pending', ''),
(7, 3, 4, '2018-06-25 22:21:32', 'pending', ''),
(8, 6, 4, '2018-06-25 22:21:32', 'pending', ''),
(9, 2, 4, '2018-06-25 22:22:26', 'pending', ''),
(10, 3, 4, '2018-06-25 22:22:26', 'pending', ''),
(11, 6, 4, '2018-06-25 22:22:26', 'pending', ''),
(12, 2, 4, '2018-06-25 22:22:40', 'pending', ''),
(13, 3, 4, '2018-06-25 22:22:40', 'pending', ''),
(14, 6, 4, '2018-06-25 22:22:40', 'pending', ''),
(15, 2, 4, '2018-06-25 22:22:44', 'pending', ''),
(16, 3, 4, '2018-06-25 22:22:44', 'pending', ''),
(17, 6, 4, '2018-06-25 22:22:44', 'pending', ''),
(18, 2, 4, '2018-06-25 22:23:27', 'pending', ''),
(19, 3, 4, '2018-06-25 22:23:27', 'pending', ''),
(20, 6, 4, '2018-06-25 22:23:27', 'pending', ''),
(21, 2, 4, '2018-06-25 22:24:43', 'pending', ''),
(22, 3, 4, '2018-06-25 22:24:43', 'pending', ''),
(23, 6, 4, '2018-06-25 22:24:43', 'pending', ''),
(24, 2, 4, '2018-06-25 22:27:40', 'pending', ''),
(25, 3, 4, '2018-06-25 22:27:40', 'pending', ''),
(26, 6, 4, '2018-06-25 22:27:40', 'pending', ''),
(27, 6, 5, '2018-06-25 22:37:16', 'pending', ''),
(28, 2, 5, '2018-06-25 22:37:16', 'pending', '');

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
(1, 'Test', '2018-06-15', '2h', 'main hall', '8:00 to 10:00', 'new', 'test 1', '150', 1, 4, '2018-06-23 10:28:06'),
(2, 'Test', '2018-06-15', '2h', 'Main hall', '8:00 to 10:00', 'new', 'Test one', '150', 2, 5, '2018-06-25 22:14:57'),
(3, 'Examination', '2018-06-05', '2h', 'main hall', '8:00 to 10:00', 'new', 'exam 1', '150', 2, 5, '2018-06-25 22:16:23'),
(4, 'Examination', '2018-06-20', 'rwe', 'rter', '8:00 to 9:00', 'new', 'hskas', '2', 2, 5, '2018-06-25 22:19:50'),
(5, 'Examination', '2018-06-08', '1h', 'main hall', '9:00 to 10:00', 'new', 'wxsadas', '230', 2, 5, '2018-06-25 22:36:51');

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
(1, 'John', 'Smith', 'John.Smith@btc.edu.za', '0787875141', 'Jacaranda Lane, Panther Road', 'John123', '2018-05-17 19:08:54', 'admin', 'South Africa', 'Johanesburg', 'active', '90888378745363', '', ''),
(2, 'Freedom', 'Khanyile', 'Freedom.Khanyile@ndu-systems.net', '0746958064', 'WestVille', 'John123', 'Khanyile', 'student', '', 'Randburg', 'active', '01254585478564', '', 'ef4ff09bfa3b235a0d0ab85018638dea'),
(3, 'Ndumiso', 'Ndlovu', 'Ndumiso.Ndlovu@mail.com', '0769580644', 'Drum - Bos', 'John123', 'Ndlovu', 'student', '', 'Bisho', 'active', '2422588466887', '', ''),
(4, 'Smiso', 'Mokoena', 'Simo.Ngqulunga@teaching.com', '0746969969', 'Boksruin 999', 'John123', 'Ngqulunga', 'lecture', '', 'Randburg', 'active', '92082558466858', '', ''),
(5, 'Zinhle', 'Mbele', 'Zinhle.Mbele@teaching.com', '0762258468', 'Kaya Sands', 'John123', '2018-06-07 20:34:40', 'lecture', '', 'Cosmo City, Ext 6', 'active', '92075512668468', '', ''),
(6, 'Ndumiso', 'Test', 'Ndumiso.Test@mail.com', '0842529472', 'Test', 'Test', '2018-06-25 16:13:50', 'student', '', 'Durnam', 'active', '565456464', '', ''),
(7, 'wqewqew', 'rerewr', 'wqewqew.rerewr@mail.com', '3213213', 'sddfaf', 'rerewr', '2018-06-25 16:17:13', 'student', '', 'ewqew', 'active', '3213213', '', ''),
(8, 'sASA', 'saSA', 'sASA.saSA@mail.com', '4321432', 'dsafdasf', 'saSA', '2018-06-25 16:18:25', 'student', '', 'fdsfs', 'active', '21321414', '', ''),
(9, 'Tewqerwr', 'ewrew', 'Tewqerwr.ewrew@teaching.com', 'rewr', 'rewr', 'ewrew', '2018-06-25 16:23:27', 'lecture', '', 'rewr', 'active', 'rewrew', '', ''),
(10, 'Muzi', 'Mkhize', 'Muzi.Mkhize@teaching.com', '0215698789', '232 Eyethu house', 'Mkhize', '2018-06-25 21:46:52', 'lecture', '', 'Johannesburg', 'active', '9865545545', '', ''),
(11, 'sAS', 'Sas', 'sAS.Sas@mail.com', 'saSa', 'sASA', 'Sas', '2018-06-30 07:53:31', 'student', '', 'saSa', 'active', 'saSA', '', ''),
(12, 'wewewq', 'ewqewqe', 'wewewq.ewqewqe@mail.com', 'ewqewq', 'ewqewqe', 'ewqewqe', '2018-06-30 08:26:35', 'student', '', 'ewqewqe', 'active', 'ewqewqe', '', ''),
(13, 'wwqq', 'wq', 'wwqq.wq@mail.com', 'qwq', 'wwq', 'wq', '2018-06-30 08:29:04', 'student', '', 'w', 'active', 'wq', '', ''),
(14, 'saSA', 'ASAs', 'saSA.ASAs@mail.com', 'saS', 'SAsa', 'ASAs', '2018-06-30 08:40:54', 'student', '', 'SAsa', 'active', 'sASA', '', ''),
(15, 'akjsHSKJAh', 'hasjHSJAh', 'akjsHSKJAh.hasjHSJAh@mail.com', 'hakjHSKhak', 'hakHAKha', 'hasjHSJAh', '2018-06-30 09:24:02', 'student', '', 'hakhKAH', 'active', 'hakjhKJAHk', '', '');

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
-- Indexes for table `student_course`
--
ALTER TABLE `student_course`
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course_subject`
--
ALTER TABLE `course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lecture_course_subject`
--
ALTER TABLE `lecture_course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student_course`
--
ALTER TABLE `student_course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student_course_subject`
--
ALTER TABLE `student_course_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `student_test`
--
ALTER TABLE `student_test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
