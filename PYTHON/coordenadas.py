def point_inside_polygon(longitud,latitud,lista_de_poligonos):
    numero_de_poligonos = len(lista_de_poligonos)
    dentro =False
 
    contador = 0
    for i in range(numero_de_poligonos):
        contador += 1
        if (contador == numero_de_poligonos):
             contador = 0
        if (lista_de_poligonos[i][1] < latitud and lista_de_poligonos[contador][1] >= latitud or lista_de_poligonos[contador][1] < latitud and lista_de_poligonos[i][1] >= latitud):
            if (lista_de_poligonos[i][0] + (latitud - lista_de_poligonos[i][1]) / (lista_de_poligonos[contador][1] - lista_de_poligonos[i][1]) * (lista_de_poligonos[contador][0] - lista_de_poligonos[i][0]) < longitud):
                dentro = not dentro
    return dentro



coordenadas = [[14.59126, -90.53429],[14.58262, -90.536],[14.58542, -90.54566],[14.59331, -90.54467]]

##### DENTRO
#longitud = 14.58823
#latitud = -90.541

##### Fuera
longitud= 14.58603 
latitud=-90.54765

resultado = point_inside_polygon(longitud,latitud,coordenadas)
print(resultado)