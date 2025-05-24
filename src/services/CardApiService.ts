export interface Card {
  imageUrl: string;
  name: string;
  setName: string;
  description: string;
  treatments: string[];
}

interface ScryfallResponseObject {
  imageUrl: string;
  name: string;
  setName: string;
  description: string;
  finishes: string[];
}

export class CardApiService {
  private static instance: CardApiService;
  private apiUrl: string;
  private commanderQuery: string;

  private constructor() {
    this.apiUrl = "https://api.scryfall.com/cards/random";
    this.commanderQuery = "is%3Acommander";
  }

  private mapCardData(data: ScryfallResponseObject): Card {
    return {
      imageUrl: data.imageUrl ?? "",
      name: data.name ?? "",
      setName: data.setName ?? "",
      description: data.description ?? "",
      treatments: data.finishes ?? [],
    };
  }

  public static getInstance(): CardApiService {
    if (!CardApiService.instance) {
      CardApiService.instance = new CardApiService();
    }
    return CardApiService.instance;
  }

  public async getRandomCommander(): Promise<Card> {
    try {
      const response = await fetch(this.apiUrl + `?q=${this.commanderQuery}&`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = this.mapCardData(
        (await response.json()) as ScryfallResponseObject,
      );
      return data;
    } catch (error) {
      console.error("Error fetching card data:", error);
      throw error;
    }
  }
}
