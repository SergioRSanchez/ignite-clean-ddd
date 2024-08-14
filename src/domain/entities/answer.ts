import { randomUUID } from 'crypto'

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public authorId: string
  public questionIn: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.authorId = props.authorId
    this.questionIn = props.questionId
    this.id = id ?? randomUUID()
  }
}