-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2023 at 03:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resolucao`
--

-- --------------------------------------------------------

--
-- Table structure for table `alunos`
--

CREATE TABLE `alunos` (
  `ID` int(10) NOT NULL,
  `Nome` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Endereco` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Cidade` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `CEP` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Celular` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Escola` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Idade` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alunos`
--

INSERT INTO `alunos` (`ID`, `Nome`, `Endereco`, `Cidade`, `CEP`, `Celular`, `Escola`, `Idade`) VALUES
(10000, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10001, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10002, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10003, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10004, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10005, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10006, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10007, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10008, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10009, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10010, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10011, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10012, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10013, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10014, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10015, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10016, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10017, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10018, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10019, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10020, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10021, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10022, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10023, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10024, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10025, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10026, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10027, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10028, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10029, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10030, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10031, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10032, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25),
(10033, 'Iago', 'condomino longe ', 'brasilia', '71680385', '999999999', 'escola longe de mais', 25);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(10) NOT NULL,
  `Usuario` varchar(255) NOT NULL,
  `Senha` varchar(255) NOT NULL DEFAULT 'senha',
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Usuario`, `Senha`, `Email`) VALUES
(1, 'iago.lucas', '$2a$10$KJlVCF9WjFklk/GC9Y3NS.UpwjpWVpT1wJxf3tpKGcPI6xs//XE5S', 'iago.lucas@hotmail.com'),
(4, 'mae.admin', '$2a$10$mz9/M9FV6fd4taqxuq6qMOyGN2LupeDYnJUEdKOe4nQ3u1uzcPoJC', 'cris.prof@hotmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alunos`
--
ALTER TABLE `alunos`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10034;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
