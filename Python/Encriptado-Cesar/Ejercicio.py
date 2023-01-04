
alf="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ0123456789\n./?´¿]['@|)°:;!¡*+}{[]_-,. $#(%&"

#funcion para encriptar un texto
def encriptar(cadena):
    encriptado=""
    for i in range(len(cadena)):
        if(cadena[i]=="&"):
            encriptado=encriptado+"a"
        else:
            encriptado=encriptado+(alf[alf.index(cadena[i])+4])
        

    open ('encriptado.txt','w').write(encriptado)
    print("\n¡Proceso encriptado exitoso! ")
    return encriptado


#Funcion para desencriptar un texto
def desencriptar(texEncript):
    desencript=""
    for i in range(len(texEncript)):
        if(texEncript[i]==alf[0]):
            desencript=desencript+alf[len(alf)-4]
        else:
            desencript=desencript+(alf[alf.index(texEncript[i])-4])
            
    
    open('desencriptado.txt','w').write(desencript)
    print("\n¡Proceso desencriptado exitoso! \n")
    return desencript



while True:
    continuar=input("¿Quiere realizar otra opcion? (SI/NO): ")
    while continuar == "SI" or continuar == "si":
        parametro=int(input("Encriptar[1] // Desencriptar[2]: "))
        while(parametro<1 or parametro>2):
            parametro=int(input("Encriptar[1] // Desencriptar[2]: "))
        if(parametro==1):
            archivo = open('laura.txt','r', encoding="utf-8")
            cadena = archivo.read()
            print("----------------------------\n","El texto encriptado es: \n","--------------------------- \n", encriptar(cadena))

        else:
            cadena = open('encriptado.txt','r')
            texEncript = cadena.read()
            print("--------------------------------\n","El texto desencriptado es: \n","------------------------------- \n",desencriptar(texEncript))
            input("")

    print("Fin del programa.")
    break


