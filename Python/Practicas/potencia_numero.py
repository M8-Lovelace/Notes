def potencia(numero):
    
    potencia = 1

    while (potencia <= 10):
        
        result = numero ** potencia
        print('Potencia de {} elevado a la {} es {}'.format(numero, potencia, result))
        potencia += 1
        

def run():
    numero = int(input('Escribe el numero al cual quieres averiguarle la potencia: '))
    potencia(numero)


if __name__ == "__main__":
    run()
