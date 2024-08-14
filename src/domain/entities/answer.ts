import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  // GETTER para retornar o valor da propriedade authorId
  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  // GETTER para retornar o valor da propriedade content e limita-o a 120 caracteres
  get excerpt() {
    return this.content
      .substring(0, 120)
      .trimEnd()
      .concat('...')
  }

  // Método privado para alterar o valor da propriedade updatedAt
  private touch() {
    this.props.updatedAt = new Date()
  }

  // SETTER para alterar o valor da propriedade content e chamar o método que atualiza o valor da propriedade updatedAt
  set content(content: string) {
    this.props.content = content

    this.touch()
  }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const answer = new Answer({
      ...props,
      createdAt: new Date(),
    }, id)

    return answer
  }
}