--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-09-18 15:30:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 232 (class 1259 OID 17057)
-- Name: analisis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.analisis (
    id_analisis integer NOT NULL,
    id_usuario integer NOT NULL,
    fecha timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    resultado character varying(255)
);


ALTER TABLE public.analisis OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 17056)
-- Name: analisis_id_analisis_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.analisis_id_analisis_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.analisis_id_analisis_seq OWNER TO postgres;

--
-- TOC entry 4961 (class 0 OID 0)
-- Dependencies: 231
-- Name: analisis_id_analisis_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.analisis_id_analisis_seq OWNED BY public.analisis.id_analisis;


--
-- TOC entry 224 (class 1259 OID 17007)
-- Name: ansiedad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ansiedad (
    id_ansiedad integer NOT NULL,
    id_usuario integer NOT NULL,
    preocupacion_bienestar_propio integer,
    miedo_dano_futuro integer,
    temor_malo_suceda integer,
    preocupacion_muchas_cosas integer,
    preocupacion_futuro integer,
    sentirse_desbordado integer,
    miedo_mente_bloquee integer,
    agobios_estres_incomodidad integer,
    preocupacion_empleo integer,
    dificultad_dormir integer,
    hacer_cosas_cierto_orden integer,
    busqueda_perfeccion integer,
    necesidad_control integer,
    dificultad_dejar_revisar integer,
    nerviosismo_sobresalto integer,
    preocupacion_pensamientos_repetitivos integer,
    estar_guardia_atenta integer,
    molestia_recuerdos_suenos integer,
    preocupacion_verguenza integer,
    miedo_juicio_negativo integer,
    incomodidad_multitudes integer,
    evitar_actividades_sociales integer,
    evitar_cosas_preocupan integer,
    desapego_irrealidad integer,
    perdida_tiempo_memoria integer,
    dificultad_adaptar_cambios integer,
    ansiedad_dificulta_actividades integer,
    pensamientos_acelerados integer,
    miedo_perder_control integer,
    sentimiento_panico integer,
    agitacion integer
);


ALTER TABLE public.ansiedad OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 17006)
-- Name: ansiedad_id_ansiedad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ansiedad_id_ansiedad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ansiedad_id_ansiedad_seq OWNER TO postgres;

--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 223
-- Name: ansiedad_id_ansiedad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ansiedad_id_ansiedad_seq OWNED BY public.ansiedad.id_ansiedad;


--
-- TOC entry 222 (class 1259 OID 16993)
-- Name: caracterizacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.caracterizacion (
    id_caracterizacion integer NOT NULL,
    id_usuario integer NOT NULL,
    lugar_residencia character varying(100),
    estrato integer,
    tipo_vivienda character varying(50),
    condiciones character varying(255),
    afiliacion character varying(50),
    ocupacion character varying(50),
    contrato character varying(50),
    ingresos character varying(50),
    composicion character varying(100),
    estado_civil character varying(50),
    relacion_pareja character varying(100),
    relaciones_familiares character varying(100),
    red_apoyo character varying(100),
    embarazo integer,
    aborto integer,
    maltrato_fisico integer,
    maltrato_psicologico integer,
    abuso_sexual integer,
    sustancias integer,
    ansiedad integer,
    depresion integer,
    otro_trastorno integer,
    psicoterapia integer,
    farmacoterapia integer,
    informacion_adicional character varying(255),
    controles_prenatales integer,
    controles_psicologia integer
);


ALTER TABLE public.caracterizacion OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16992)
-- Name: caracterizacion_id_caracterizacion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.caracterizacion_id_caracterizacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.caracterizacion_id_caracterizacion_seq OWNER TO postgres;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 221
-- Name: caracterizacion_id_caracterizacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.caracterizacion_id_caracterizacion_seq OWNED BY public.caracterizacion.id_caracterizacion;


--
-- TOC entry 230 (class 1259 OID 17043)
-- Name: certificacion_profesional; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.certificacion_profesional (
    id_certificacion integer NOT NULL,
    id_profesional integer NOT NULL,
    archivo bytea,
    nombre_archivo character varying(255)
);


ALTER TABLE public.certificacion_profesional OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 17042)
-- Name: certificacion_profesional_id_certificacion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.certificacion_profesional_id_certificacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.certificacion_profesional_id_certificacion_seq OWNER TO postgres;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 229
-- Name: certificacion_profesional_id_certificacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.certificacion_profesional_id_certificacion_seq OWNED BY public.certificacion_profesional.id_certificacion;


--
-- TOC entry 226 (class 1259 OID 17019)
-- Name: depresion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.depresion (
    id_depresion integer NOT NULL,
    id_usuario integer NOT NULL,
    capacidad_reir_ver_lado_bueno integer,
    mirar_futuro_con_placer integer,
    culparse_sin_necesidad integer,
    ansiedad_preocupacion_sin_motivo integer,
    miedo_panico_sin_motivo integer,
    sensacion_opresion_agobio integer,
    infelicidad_dificultad_dormir integer,
    tristeza_desgracia integer,
    infelicidad_llanto integer,
    pensamientos_autolesion integer
);


ALTER TABLE public.depresion OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 17018)
-- Name: depresion_id_depresion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.depresion_id_depresion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.depresion_id_depresion_seq OWNER TO postgres;

--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 225
-- Name: depresion_id_depresion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.depresion_id_depresion_seq OWNED BY public.depresion.id_depresion;


--
-- TOC entry 228 (class 1259 OID 17031)
-- Name: profesional; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profesional (
    id_profesional integer NOT NULL,
    id_usuario integer NOT NULL,
    institucion character varying(100),
    enfoque character varying(100)
);


ALTER TABLE public.profesional OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17030)
-- Name: profesional_id_profesional_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profesional_id_profesional_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profesional_id_profesional_seq OWNER TO postgres;

--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 227
-- Name: profesional_id_profesional_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profesional_id_profesional_seq OWNED BY public.profesional.id_profesional;


--
-- TOC entry 218 (class 1259 OID 16970)
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16969)
-- Name: rol_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rol_id_rol_seq OWNER TO postgres;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 217
-- Name: rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public.rol.id_rol;


--
-- TOC entry 220 (class 1259 OID 16977)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    id_rol integer NOT NULL,
    correo character varying(100) NOT NULL,
    contrasena character varying(255) NOT NULL,
    nombre character varying(100) NOT NULL,
    fecha_nacimiento date NOT NULL,
    celular character varying(20),
    cedula character varying(20)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16976)
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 219
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- TOC entry 4784 (class 2604 OID 17060)
-- Name: analisis id_analisis; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analisis ALTER COLUMN id_analisis SET DEFAULT nextval('public.analisis_id_analisis_seq'::regclass);


--
-- TOC entry 4780 (class 2604 OID 17010)
-- Name: ansiedad id_ansiedad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ansiedad ALTER COLUMN id_ansiedad SET DEFAULT nextval('public.ansiedad_id_ansiedad_seq'::regclass);


--
-- TOC entry 4779 (class 2604 OID 16996)
-- Name: caracterizacion id_caracterizacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracterizacion ALTER COLUMN id_caracterizacion SET DEFAULT nextval('public.caracterizacion_id_caracterizacion_seq'::regclass);


--
-- TOC entry 4783 (class 2604 OID 17046)
-- Name: certificacion_profesional id_certificacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificacion_profesional ALTER COLUMN id_certificacion SET DEFAULT nextval('public.certificacion_profesional_id_certificacion_seq'::regclass);


--
-- TOC entry 4781 (class 2604 OID 17022)
-- Name: depresion id_depresion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depresion ALTER COLUMN id_depresion SET DEFAULT nextval('public.depresion_id_depresion_seq'::regclass);


--
-- TOC entry 4782 (class 2604 OID 17034)
-- Name: profesional id_profesional; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profesional ALTER COLUMN id_profesional SET DEFAULT nextval('public.profesional_id_profesional_seq'::regclass);


--
-- TOC entry 4777 (class 2604 OID 16973)
-- Name: rol id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol ALTER COLUMN id_rol SET DEFAULT nextval('public.rol_id_rol_seq'::regclass);


--
-- TOC entry 4778 (class 2604 OID 16980)
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- TOC entry 4803 (class 2606 OID 17063)
-- Name: analisis analisis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analisis
    ADD CONSTRAINT analisis_pkey PRIMARY KEY (id_analisis);


--
-- TOC entry 4795 (class 2606 OID 17012)
-- Name: ansiedad ansiedad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ansiedad
    ADD CONSTRAINT ansiedad_pkey PRIMARY KEY (id_ansiedad);


--
-- TOC entry 4793 (class 2606 OID 17000)
-- Name: caracterizacion caracterizacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracterizacion
    ADD CONSTRAINT caracterizacion_pkey PRIMARY KEY (id_caracterizacion);


--
-- TOC entry 4801 (class 2606 OID 17050)
-- Name: certificacion_profesional certificacion_profesional_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificacion_profesional
    ADD CONSTRAINT certificacion_profesional_pkey PRIMARY KEY (id_certificacion);


--
-- TOC entry 4797 (class 2606 OID 17024)
-- Name: depresion depresion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depresion
    ADD CONSTRAINT depresion_pkey PRIMARY KEY (id_depresion);


--
-- TOC entry 4799 (class 2606 OID 17036)
-- Name: profesional profesional_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profesional
    ADD CONSTRAINT profesional_pkey PRIMARY KEY (id_profesional);


--
-- TOC entry 4787 (class 2606 OID 16975)
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 4789 (class 2606 OID 16986)
-- Name: usuario usuario_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correo_key UNIQUE (correo);


--
-- TOC entry 4791 (class 2606 OID 16984)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4810 (class 2606 OID 17064)
-- Name: analisis analisis_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analisis
    ADD CONSTRAINT analisis_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4806 (class 2606 OID 17013)
-- Name: ansiedad ansiedad_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ansiedad
    ADD CONSTRAINT ansiedad_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4805 (class 2606 OID 17001)
-- Name: caracterizacion caracterizacion_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracterizacion
    ADD CONSTRAINT caracterizacion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4809 (class 2606 OID 17051)
-- Name: certificacion_profesional certificacion_profesional_id_profesional_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificacion_profesional
    ADD CONSTRAINT certificacion_profesional_id_profesional_fkey FOREIGN KEY (id_profesional) REFERENCES public.profesional(id_profesional);


--
-- TOC entry 4807 (class 2606 OID 17025)
-- Name: depresion depresion_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.depresion
    ADD CONSTRAINT depresion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4808 (class 2606 OID 17037)
-- Name: profesional profesional_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profesional
    ADD CONSTRAINT profesional_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 4804 (class 2606 OID 16987)
-- Name: usuario usuario_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.rol(id_rol);


-- Completed on 2025-09-18 15:30:09

--
-- PostgreSQL database dump complete
--
