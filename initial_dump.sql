--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.18
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.role (id, name) VALUES (1, 'guest');
INSERT INTO public.role (id, name) VALUES (2, 'admin');


--
-- Data for Name: identity; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.identity (id, phone, email, password, role_id) VALUES (1, '-', 'evtuhovdo@gmail.com', 'ae0691656d8a226d41212bdd3e3cae393f53016f018138f830fbe7a9ef08716f', 2);
INSERT INTO public.identity (id, phone, email, password, role_id) VALUES (5, '--', '3367400@mail.ru', '8ee791be926192d13ca49073491c4ef759bd82dd2a69d7fcf70f6c0a74a983fa', 2);


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (17, 'Горшок для рассады 2л формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-a1ff24dc-5d98-4e9b-bbb0-e3f54c27fcee-Горшок для рассады 2л формовка.jpg', '<ul><li>Горшок для рассады V-2л.</li><li>Объём: 2 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 16х14,5.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: терракот.</li><li>Цена: 7,5 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (2, 'Горшок для рассады 0,5л литой', true, 'https://pitomnik.hb.bizmrg.com/items/%D0%93%D0%BE%D1%80%D1%88%D0%BE%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B0%D1%81%D1%81%D0%B0%D0%B4%D1%8B%200,5%D0%BB%20%D0%BB%D0%B8%D1%82%D0%BE%D0%B9.jpg', '<ul><li>Горшок для рассады V-0,5л. </li><li>Объём: 0,5 литра. </li><li>Форма: квадратный. </li><li>Размеры(d/h): 9x9x10. </li><li>Способ изготовления: литьё. </li><li>Характеристики: жёсткий. </li><li>Цвет: чёрный.</li><li>Цена: 3,10 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (1, 'Горшок для рассады 0,4л формовка', true, 'https://pitomnik.hb.bizmrg.com/items/%D0%93%D0%BE%D1%80%D1%88%D0%BE%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B0%D1%81%D1%81%D0%B0%D0%B4%D1%8B%200,4%D0%BB%20%D1%84%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%BA%D0%B0.jpg', '<ul><li>Горшок для рассады V-0,4л.</li><li>Объём: 0,4 литра.</li><li>Форма: квадратный.</li><li>Размеры(d/h): 9x9x8.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 1,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (11, 'Горшок для рассады 0,5л формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-8b79ee74-bd53-4cc8-9c85-d0f0ab9081de-Горшок для рассады 0,5л формовка.jpg', '<ul><li>Горшок для рассады V-0,5л.</li><li>Объём: 0,5 литра.</li><li>Форма: квадратный.</li><li>Размеры(d/h): 9x9x10.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 2 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (12, 'Горшок для рассады 0,8л формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-5fc9a573-8cce-402b-b547-b722876abeb2-Горшок для рассады 0,8л формовка.jpg', '<ul><li>Горшок для рассады V-0,8л.</li><li>Объём: 0,8 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 12х10,5.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 3,00 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (13, 'Горшок для рассады 0,8л(роза) формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-e8fc2a9a-5ed9-49b4-829e-09f46055ccf5-Горшок для рассады 0,8л(роза) формовка.jpg', '<ul><li>Горшок для рассады(роза) V-0,8л.</li><li>Объём: 0,8 литра.</li><li>Форма: квадратный.</li><li>Размеры(d/h): 9x9x14.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 3,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (14, 'Горшок для рассады 1л формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-dd30dab6-d345-464d-b31d-36e5bc1af4d2-Горшок для рассады 1л формовка.jpg', '<ul><li>Горшок для рассады V-1л.</li><li>Объём: 1 литр.</li><li>Форма: круглый.</li><li>Размеры(d/h): 13х11см.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 3,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (18, 'Горшок для рассады 2л(роза) литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-3c496741-84d2-4e19-aa93-28905d9e3ee6-Горшок для рассады 2л(роза) литой.jpg', '<ul><li>Горшок для рассады(роза) V-2л.</li><li>Объём: 2 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 14х18.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 11,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (15, 'Горшок для рассады 2,1л(роза) литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-6104f989-13b3-4264-bba3-21cb73a9dfca-Горшок для рассады 2,1л(роза) литой.jpg', '<ul><li>Горшок для рассады(роза) V-2.1л.</li><li>Объём: 2,1 литра.</li><li>Форма: квадратный.</li><li>Размеры(d/h): 12х12х19,5.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 14,20 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (16, 'Горшок для рассады 2,1л(роза) формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-d7d9edc2-8a1a-4ab1-b966-43189c5e70d1-Горшок для рассады 2,1л(роза) формовка.jpg', '<ul><li>Горшок для рассады(роза) V-2.1л.</li><li>Объём: 2,1 литра.</li><li>Форма: квадратный.</li><li>Размеры(d/h): 12х12х19,5.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 8,20 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (19, 'Горшок для рассады 3л литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-21e4feb3-98f7-4a79-9148-88655718b16e-Горшок для рассады 3л литой.jpg', '<ul><li>Горшок для рассады V-3л.</li><li>Объём: 3 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 19х15.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: от 1 до 500шт. - 11 руб.</li><li>&nbsp;&nbsp;&nbsp;от 500 до 2000шт. - 10,50 руб.</li><li>&nbsp;&nbsp;&nbsp;от 2000шт. - 9,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (20, 'Горшок для рассады 3л(роза) литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-f6dd9ad2-c483-4dda-8942-16f97e62443c-Горшок для рассады 3л(роза) литой.jpg', '<ul><li>Горшок для рассады(роза) V-3л.</li><li>Объём: 3 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 16х20,5.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 15,50 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (21, 'Горшок для рассады 3л(роза) формовка', true, 'https://hb.bizmrg.com/pitomnik/items/item-8d961d53-9e96-43b5-888b-c8ecba78aa17-Горшок для рассады 3л(роза) формовка.jpg', '<ul><li>Горшок для рассады(роза) V-3л.</li><li>Объём: 3 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 16х20,5.</li><li>Способ изготовления: формовка.</li><li>Характеристики: мягкий.</li><li>Цвет: чёрный.</li><li>Цена: 9,50 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (23, 'Горшок для рассады 5л литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-0f99dbc0-6a5e-4c11-b650-87718ce0a58a-Горшок для рассады 5л литой.jpg', '<ul><li>Горшок для рассады V-5л.</li><li>Объём: 5 литров.</li><li>Форма: круглый.</li><li>Размеры(d/h): 23х18.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: от 1 до 500шт. - 20 руб.</li><li>&nbsp;&nbsp;&nbsp;от 500 до 2000шт. - 17,90 руб.</li><li>&nbsp;&nbsp;&nbsp;от 2000шт. - 16,90 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (24, 'Горшок для рассады 7л(роза) литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-89ff2ddf-c9ea-4f54-8d91-c5afd593a72e-Горшок для рассады 7л(роза) литой.jpg', '<ul><li>Горшок для рассады(роза) V-7л.</li><li>Объём: 7 литров.</li><li>Форма: круглый.</li><li>Размеры(d/h): 22х25,6.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 30 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (25, 'Горшок для рассады 10л литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-b2abf6ab-89b7-49cf-be50-8f2b5233d811-Горшок для рассады 10л литой.jpg', '<ul><li>Горшок для рассады V-10л.</li><li>Объём: 10 литров.</li><li>Форма: круглый.</li><li>Размеры(d/h): 29х22.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 36 руб.</li></ul>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (26, 'Агробалт-В 250л.', true, 'https://hb.bizmrg.com/pitomnik/items/item-4aaa570b-f64b-4f08-935d-e27f73d60679-Агробалт-В 250л..jpg', '<p>Изготовлен на основе верхового торфа низкой степени разложения, добытого резным или фрезерным способом.</p><p>Состав:</p><ul><li>верховой сфагновый торф низкой степени разложения.</li></ul><p>Цена: 775 руб.</p><p><br></p>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (27, 'Агробалт-Н 70л.', true, 'https://hb.bizmrg.com/pitomnik/items/item-adad0f27-2fe5-410c-9d94-5730329dd4d8-Агробалт-Н 70л..jpg', '<p>Изготовлен на основе верхового торфа низкой степени разложения, добытого резным или фрезерным способом. Для нейтрализации торфа применяют известковые материалы (доломитовая мука, известняковая мука).</p><p><br></p><p>Состав:</p><ul><li>верховой сфагновый торф низкой степени разложения, известняковая (доломитовая) мука.</li></ul><p>&nbsp;</p><p>Цена: 300 руб.</p>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (28, 'Агробалт-Н 250л.', true, 'https://hb.bizmrg.com/pitomnik/items/item-2c9111f6-bf33-4d6b-b390-84b60fc5aaad-Агробалт-Н 250л..jpg', '<p>Изготовлен на основе верхового торфа низкой степени разложения, добытого резным или фрезерным способом. Для нейтрализации торфа применяют известковые материалы (доломитовая мука, известняковая мука).</p><p><br></p><p>Состав:</p><ul><li>верховой сфагновый торф низкой степени разложения, известняковая (доломитовая) мука.</li></ul><p>&nbsp;</p><p>Цена: 800 руб.</p>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (29, 'Агробалт-С 70л.', true, 'https://hb.bizmrg.com/pitomnik/items/item-5127dcbf-da21-487d-83a6-e2256bc43d85-Агробалт-С 70л..jpg', '<p>Изготовлен на основе верхового торфа низкой степени разложения, добытого резным или фрезерным способами. Для нейтрализации торфа применяют известковые материалы (доломитовая мука, известняковая мука). Для обогащения торфа питательными веществами применяются комплексные минеральные удобрения.</p><p><br></p><p>Состав:</p><ul><li>верховой сфагновый торф низкой степени разложения</li><li>известняковая (доломитовая) мука</li><li>комплексное минеральное удобрение с полным набором макро- и микроэлементов</li></ul><p><br></p><p>Цена: 340 руб.</p>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (30, 'Агробалт-С 250л.', true, 'https://hb.bizmrg.com/pitomnik/items/item-4ee6c28a-ca0c-4059-a22d-f6fa801aa84b-Агробалт-С 250л..jpg', '<p>Изготовлен на основе верхового торфа низкой степени разложения, добытого резным или фрезерным способами. Для нейтрализации торфа применяют известковые материалы (доломитовая мука, известняковая мука). Для обогащения торфа питательными веществами применяются комплексные минеральные удобрения.</p><p><br></p><p>Состав:</p><ul><li>верховой сфагновый торф низкой степени разложения</li><li>известняковая (доломитовая) мука</li><li>комплексное минеральное удобрение с полным набором макро- и микроэлементов</li></ul><p><br></p><p>Цена: 970 руб.</p>');
INSERT INTO public.item (id, name, active, "imageURL", description) VALUES (22, 'Горшок для рассады 4л(роза) литой', true, 'https://hb.bizmrg.com/pitomnik/items/item-e481a1bb-d0f5-4fd2-a979-fd1d40ed276f-Горшок для рассады 4л(роза) литой.jpg', '<ul><li>Горшок для рассады(роза) V-4л.</li><li>Объём: 4 литра.</li><li>Форма: круглый.</li><li>Размеры(d/h): 18,5х21,5см.</li><li>Способ изготовления: литьё.</li><li>Характеристики: жёсткий.</li><li>Цвет: чёрный.</li><li>Цена: 19,90 руб.</li></ul>');


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.oauth_clients (client_id, client_secret, redirect_uri) VALUES ('web', 'web', '/');


--
-- Name: identity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.identity_id_seq', 5, true);


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.item_id_seq', 30, true);


--
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.role_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

