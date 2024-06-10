import { BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

const mockReviewData: BookReviewItem[] = Array.from({length: 8}).map((_, index) => ({
  id: index,
  userName: `${faker.person.lastName()}${faker.person.firstName()}`,
  content: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  score: faker.helpers.rangeToNumber({min: 1, max: 5})
}));

export const reviewsById = http.get("http://localhost:4400/reviews/:bookId", () => {
  return HttpResponse.json(mockReviewData, {
    status: 200
  });
});