-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 05 Mar 2020 pada 06.29
-- Versi Server: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toko`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `item`
--

CREATE TABLE `item` (
  `item_code` int(11) NOT NULL,
  `item_name` varchar(256) NOT NULL,
  `item_kategori` varchar(256) NOT NULL,
  `price` int(20) NOT NULL,
  `stok` int(20) NOT NULL,
  `owner` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `item`
--

INSERT INTO `item` (`item_code`, `item_name`, `item_kategori`, `price`, `stok`, `owner`, `email`) VALUES
(4, 'motor', 'kendaraan', 290000, 90, 'aldi', 'aldi@gmail.com'),
(5, 'panci', 'alat dapur', 19000, 100, 'aldi', 'aldi@gmail.com'),
(6, 'hp', 'elektronik', 1900000, 100, 'aldi', 'aldi@gmail.com'),
(7, 'mobil', 'kendaraan', 109000000, 90, 'aldi', 'aldi@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `registration`
--

CREATE TABLE `registration` (
  `first_name` varchar(256) NOT NULL,
  `last_name` varchar(256) NOT NULL,
  `gender` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `number` int(14) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `registration`
--

INSERT INTO `registration` (`first_name`, `last_name`, `gender`, `email`, `password`, `number`, `id`) VALUES
('kalbi', 'umami', 'L', 'kalbu@gmail.com', '$2b$10$.VpGALnheJWIjslQm7NgtO4lhw9U4jb07s02FvlttBrVPb2OzTmjq', 2147483647, 1),
('aldi', 'farhan', 'L', 'aldi@gmail.com', '$2b$10$TnxI8TY6YuFgoTuh..1aau4a/zgrPtD/CUtKW2lCHb6sA5XjG5Xxm', 2147483647, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `kodeBarang` int(12) NOT NULL,
  `namaBarang` varchar(256) NOT NULL,
  `kategoriBarang` varchar(256) NOT NULL,
  `namaUser` varchar(256) NOT NULL,
  `harga` int(12) NOT NULL,
  `jumlah` int(12) NOT NULL,
  `harga_total` int(12) NOT NULL,
  `nama_pembeli` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_transaksi`
--

INSERT INTO `tb_transaksi` (`kodeBarang`, `namaBarang`, `kategoriBarang`, `namaUser`, `harga`, `jumlah`, `harga_total`, `nama_pembeli`) VALUES
(18, 'motor', 'kendaraan', 'aldi', 290000, 10, 2900000, 'kalbi'),
(19, 'mobil', 'kendaraan', 'aldi', 109000000, 10, 1090000000, 'kalbi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_code`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD PRIMARY KEY (`kodeBarang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  MODIFY `kodeBarang` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
