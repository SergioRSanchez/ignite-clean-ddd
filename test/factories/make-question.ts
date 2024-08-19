import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion() {
  const question = Question.create({
    authorId: new UniqueEntityID('1'),
    title: 'Example Question',
    content: 'Example Content',
    slug: Slug.create('example-question'),
  })

  return question
}
