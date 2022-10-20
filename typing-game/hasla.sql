-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 20 Paź 2022, 11:20
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `hasla`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teksty`
--

CREATE TABLE `teksty` (
  `id` int(11) NOT NULL,
  `tresc` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `teksty`
--

INSERT INTO `teksty` (`id`, `tresc`) VALUES
(1, 'Bez pracy nie ma kołaczy.'),
(2, 'Cała historia się powtarza.'),
(3, 'Nic dwa razy się nie zdarza.'),
(4, 'Chłop się nie przeżegna, dopóki piorunu nie usłyszy'),
(5, 'Dziura w worze, gość w komorze, piasek w mące, woda w łące, kąkol w życie, złość w habicie — rzeczy niecne'),
(6, 'Deszcze na lipca pierwszego, drugiego, zapowiedzią deszczu czterdziestodniowego'),
(7, 'Są dwie drogi, aby przeżyć życie. Jedna to żyć tak, jakby nic nie było cudem. Druga to żyć tak, jakby cudem było wszystko.'),
(8, 'Dwa najważniejsze dni w życiu to ten, w którym się urodziłeś, i ten, kiedy zrozumiesz, dlaczego się urodziłeś.'),
(9, 'Najpiękniejszych chwil w życiu nie zaplanujesz. One przyjdą same. Sztuka życia – to cieszyć się małym szczęściem.'),
(10, 'Siedzę w pociągu, który ma określoną stację końcową, ale nie wiem jeszcze, ile razy i na której stacji wysiądę, ani tym bardziej co na tych stacjach się wydarzy. Choć kusi mnie wizja idealnego życia, to nie wytrzymałabym w jednym wagonie przez całe życie.'),
(11, 'Wielu życiowych przegranych to ludzie, którzy nie zdawali sobie sprawy, jak blisko byli sukcesu, kiedy się poddali.'),
(12, 'Jeśli nie potrafisz latać, biegnij. Jeśli nie potrafisz biegać, chodź. Jeśli nie potrafisz chodzić, czołgaj się. Cokolwiek jednak robisz, poruszaj się do przodu.'),
(13, 'Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno.'),
(14, 'Największym powodem do chwały nie jest nigdy nie upaść, ale umieć podnieść się za każdym razem , kiedy upadniemy'),
(15, 'Ludzie sami nie zmieniają się nigdy. Ludzi zmienia życie. Dobre czy złe, dobrego czy złego człowieka, ale zawsze życie.'),
(16, 'Przeciwności, z którymi musimy się zmierzyć, często sprawiają, że stajemy się silniejsi. To, co dziś wydaje się stratą, jutro może okazać się zyskiem.'),
(17, 'Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie.'),
(18, 'Wyrwał się jak Filip z konopi.'),
(19, 'Co kraj to obyczaj, co rodzina to zwyczaj.'),
(20, 'Dlatego dwie uszy, jeden język dano, iżby mniej mówiono, a więcej słuchano.');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `teksty`
--
ALTER TABLE `teksty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `teksty`
--
ALTER TABLE `teksty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
