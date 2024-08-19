import { QuestionsRepository } from '../repositories/questions-repository'

interface DeleteQuestionUseCaseRequest {
  questionId: string
}

// eslint-disable-next-line prettier/prettier
interface DeleteQuestionUseCaseResponse { }

export class DeleteQuestionUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private questionsRepository: QuestionsRepository) { }

  async execute({
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    await this.questionsRepository.delete(question)

    return {}
  }
}
