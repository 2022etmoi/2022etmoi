enum CandidateAnswer {
    NO,
    YES,
}

enum UserAnswer {
    MUST_NOT,
    NO,
    SKIP,
    YES,
    MUST,
}

interface Answer {
    proposition: PropositionID,
    value: CandidateAnswer,
    reason: string,
}