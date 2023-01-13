(() => {
  interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
  }

  // Generar un contrato con una interfaz, la clase si o si deberá contener las propiedades
  // de la clase que serán públicos, ya que el tipo de acceso es de clases y no en las interfaces
  class PostgresDriver implements Driver {
    constructor(
      public database: string,
      public password: string,
      public port: number,
      private host: number
    ) {}

    connect(): void {
      console.log("Connecting...");
    }

    disconnect(): void {
      console.log("Disconnecting...");
    }

    isConnected(name: string): boolean {
      return Math.random() < 0.5;
    }
  }

  // class OracleDriver implements Driver {
  //   constructor(
  //     public database: string,
  //     public password: string,
  //     public port: number
  //   ) {}

  //   connect(): void {
  //     console.log("Connecting...");
  //   }

  //   disconnect(): void {
  //     console.log("Disconnecting...");
  //   }

  //   isConnected(name: string): boolean {
  //     return Math.random() < 0.5;
  //   }
  // }
})();
