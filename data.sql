USE canski;
INSERT INTO CATEGORIAS (id, nombre)
VALUES (1, 'indumentaria');
INSERT INTO CATEGORIAS (id, nombre)
VALUES (2, 'esqui');
INSERT INTO CATEGORIAS (id, nombre)
VALUES (3, 'accesorios');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 3, 'Casco', 'Color negro', '13000', 'casco.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 3, 'Gorro', 'Color negro, rojo y azul', '2200', 'gorro.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 3, 'Antiparras', 'Armazon ajustable', '6000', 'antiparras.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 3, 'Guantes de esqui', 'Color negro. Talle S, M, L y XL', '6000', 'guantes-ski.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 1, 'Campera de esqui', 'Colores celeste, azul y rojo. Talles S, M, L y XL', '30000', 'campera_ski.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 1, 'Pantalon de esqui hombre', 'Color gris o negro. Talles S, M, L o XL', '25000', 'pantalon_hombre_ski.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 1, 'Pantalon de esqui mujer', 'Color rosa o rojo. Talles S, M, L o XL', '25000', 'pantalon_mujer_ski.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 1, 'Botas de nieve', 'Talles 36 al 42, colores negro, azul y rojo', '4000', 'botas.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 2, 'Bastones de esqui', 'Colores rojo, azul y verde. Tamaño unico', '15000', 'baston-esqui.jpg');
INSERT INTO productos (id, id_categoria, nombre, descripcion, precio, img)
VALUES (DEFAULT, 2, 'Esquis', 'Colores celeste, negro y rojo', '10000', 'esquis.png');
INSERT INTO roles (id, nombre)
VALUES (1, 'administrador');
INSERT INTO roles (id, nombre)
VALUES (2, 'usuario');
INSERT INTO usuarios (id, id_rol, usuario, nombre, apellido, email, password, direccion, fecha_nacimiento)
VALUES (DEFAULT, 1, 'Juan1986', 'Juan', 'Perez', 'juanperez@gmail.com', 1234, 'Av Santa Fe 2550', '1986-02-16');
INSERT INTO usuarios (id, id_rol, usuario, nombre, apellido, email, password, direccion, fecha_nacimiento)
VALUES (DEFAULT, 2, 'Luis1994', 'Luis', 'Gonzalez', 'luisgonzalez@gmail.com', 1234, 'Juncal 2950', '1994-12-07');
INSERT INTO usuarios (id, id_rol, usuario, nombre, apellido, email, password, direccion, fecha_nacimiento)
VALUES (DEFAULT, 2, 'Carlos1987', 'Carlos', 'Gomez', 'carlosgomez@gmail.com', 1234, 'Av Pueyrredon 1250', '1987-08-25');
INSERT INTO facturas (id, id_usuario, total, fecha_factura, direccion_factura)
VALUES (DEFAULT, 2, 13000, '2023-01-08 10:00', 'Av Santa Fe 2550');
INSERT INTO facturas (id, id_usuario, total, fecha_factura, direccion_factura)
VALUES (DEFAULT, 3, 2200, '2023-01-08 12:00', 'Juncal 2950');
INSERT INTO factura_producto (id, id_producto, id_factura, 
precio, cantidad)
VALUES (DEFAULT, 1, 1, 13000, 1);
INSERT INTO factura_producto (id, id_producto, id_factura, 
precio, cantidad)
VALUES (DEFAULT, 2, 2, 2200, 1)






