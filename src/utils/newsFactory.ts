import { faker } from '@faker-js/faker';
import INews from '../types/INews';
export default function newsFactory(total: number): undefined | INews[] {
  if (!total) return;
  const news = []

  for (let i = 1; i <= total; i++) {
    const newUpdate = {
      description: faker.lorem.words(10),
      imageUrl: faker.image.url(),
      link: faker.internet.url(),
      title: faker.commerce.productName()
    } satisfies INews
    news.push(newUpdate)
  }

  return news
}