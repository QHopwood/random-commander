import { FilterContextTypes } from "../types/FilterContextTypes";

export interface Card {
  imageUrl: string;
  name: string;
  setName: string;
  description: string;
  treatments: string[];
}

interface ScryfallResponseObject {
  id: string;
  name: string;
  image_uris?: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  set_name: string;
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
      imageUrl: data.image_uris?.normal ?? "",
      name: data.name ?? "",
      setName: data.set_name ?? "",
      description: data.oracle_text ?? "",
      treatments: data.finishes ?? [],
    };
  }

  public static getInstance(): CardApiService {
    if (!CardApiService.instance) {
      CardApiService.instance = new CardApiService();
    }
    return CardApiService.instance;
  }

  private buildScryfallQuery(filters: FilterContextTypes): string {
    let query = "is:commander";
    if (filters.colors && filters.colors.length > 0) {
      const colorQuery = filters.colors
        .filter((c) => c.checked)
        .map((c) => c.value[0].toUpperCase())
        .join("");
      if (colorQuery) query += ` c:${colorQuery}`;
    }
    if (filters.minCMV) query += ` cmc>=${filters.minCMV}`;
    if (filters.maxCMV && filters.maxCMV !== Number.MAX_VALUE)
      query += ` cmc<=${filters.maxCMV}`;
    // Add more filter logic as needed
    return query;
  }

  public async getRandomCommander(filters?: FilterContextTypes): Promise<Card> {
    const query = filters ? this.buildScryfallQuery(filters) : "is:commander";
    try {
      const response = await fetch(
        `${this.apiUrl}?q=${encodeURIComponent(query)}`,
      );
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
