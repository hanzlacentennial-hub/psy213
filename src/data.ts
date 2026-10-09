
export type Question = {
  question: string;
  answer: string;
  wrong: [string, string, string];
};

export const questions: Question[] = [
  {
    question: "What is Piaget's view of children?",
    answer: "Children are seen as scientists who create theories and adapt them over time with experience.",
    wrong: [
      "Children learn exclusively through imitation.",
      "Children are passive recipients of adult knowledge.",
      "Children's reasoning stays unchanged throughout development."
    ]
  },
  {
    question: "What are schemas in Piaget's theory?",
    answer: "Psychological structures that organize experience through mental categories and conceptual models of knowledge.",
    wrong: [
      "Reflexes that disappear after infancy.",
      "Rewards that reinforce behavior.",
      "A fixed sequence of language sounds."
    ]
  },
  {
    question: "What is the first stage of Piaget's cognitive development?",
    answer: "Sensorimotor Stage",
    wrong: [
      "Preoperational Stage",
      "Concrete Operational Stage",
      "Formal Operational Stage"
    ]
  },
  {
    question: "What characterizes Piaget's preoperational thought?",
    answer: "Children use symbols to represent objects and events.",
    wrong: [
      "Children consistently use abstract hypothetical reasoning.",
      "Children rely only on reflexive movements.",
      "Children master logical operations on concrete objects."
    ]
  },
  {
    question: "What is the third stage of Piaget's cognitive development?",
    answer: "Concrete Operational Thinking",
    wrong: [
      "Sensorimotor Stage",
      "Preoperational Thought",
      "Formal Operational Reasoning"
    ]
  },
  {
    question: "What is the fourth stage of Piaget's cognitive development?",
    answer: "Formal Operational Reasoning",
    wrong: [
      "Sensorimotor Stage",
      "Preoperational Thought",
      "Concrete Operational Thinking"
    ]
  },
  {
    question: "What do core-knowledge theorists believe about children?",
    answer: "Children enter the world equipped as active learners with specialized learning mechanisms.",
    wrong: [
      "Children have no learning capacities until school.",
      "Children learn only through verbal instruction.",
      "Children possess fully developed adult knowledge at birth."
    ]
  },
  {
    question: "What is nativism in the context of cognitive development?",
    answer: "The belief that infants have substantial innate knowledge of important evolutionary domains.",
    wrong: [
      "The view that all knowledge comes only from direct teaching.",
      "The view that cognition starts only after language develops.",
      "The view that children cannot reason about their surroundings."
    ]
  },
  {
    question: "What are some domains that nativism covers?",
    answer: "Inanimate objects, minds of people and animals, numbers, and spatial layouts.",
    wrong: [
      "Grammar, handwriting, sports, and music notation.",
      "Driving, algebra, coding, and spelling.",
      "Cooking, politics, history, and painting."
    ]
  },
  {
    question: "What is constructivism in cognitive development?",
    answer: "The idea that infants build advanced understanding by combining innate knowledge with experiences.",
    wrong: [
      "All knowledge is present in complete form at birth.",
      "Learning occurs without interaction with the environment.",
      "Cognitive abilities cannot change through development."
    ]
  },
  {
    question: "What do sociocultural theories emphasize?",
    answer: "The significant role of other people and culture in children's development.",
    wrong: [
      "The absence of social influence on learning.",
      "The idea that genes alone determine every skill.",
      "The claim that children learn independently of context."
    ]
  },
  {
    question: "What is guided participation?",
    answer: "A process where children learn through interaction with more knowledgeable others.",
    wrong: [
      "Learning exclusively by memorizing facts alone.",
      "Learning only by biological maturation.",
      "Learning without observing or interacting with anyone."
    ]
  },
  {
    question: "What is the zone of proximal development?",
    answer: "The difference between what a learner can do without help and what they can do with help.",
    wrong: [
      "The difference between physical and chronological age.",
      "The number of facts someone can memorize in a day.",
      "The set of tasks someone can never learn."
    ]
  },
  {
    question: "Who is Lev Vygotsky?",
    answer: "A sociocultural theorist who theorized that children are social learners connected to others.",
    wrong: [
      "A researcher known for operant conditioning chambers.",
      "The theorist who proposed the four Piagetian stages.",
      "A researcher who argued culture has no effect on learning."
    ]
  },
  {
    question: "What are the three phases of internalized speech according to Vygotsky?",
    answer: "1. Other people's statements control behavior. 2. Private speech controls behavior. 3. Internalized private speech controls behavior.",
    wrong: [
      "1. Internal speech controls behavior. 2. Other people's statements control behavior. 3. Private speech controls behavior.",
      "1. Private speech controls behavior. 2. Internalized speech controls behavior. 3. Other people's statements control behavior.",
      "1. Internalized private speech controls behavior. 2. Private speech controls behavior. 3. Other people's statements control behavior."
    ]
  },
  {
    question: "What is social scaffolding?",
    answer: "Support provided by others to help children achieve tasks they cannot complete independently.",
    wrong: [
      "Removing all assistance before a child starts a new task.",
      "Giving identical tasks regardless of a child's ability.",
      "Replacing learning activities with physical exercise."
    ]
  },
  {
    question: "What is the role of cultural tools in sociocultural theories?",
    answer: "Cultural tools facilitate children's learning and development.",
    wrong: [
      "Cultural tools prevent children from interacting with adults.",
      "Cultural tools replace all biological influences on development.",
      "Cultural tools eliminate the need for practice or experience."
    ]
  },
  {
    question: "What is the significance of naïve theories in cognitive development?",
    answer: "Children explain phenomena using fundamental principles and categorize objects and events.",
    wrong: [
      "Children have no explanations for events before adolescence.",
      "Children rely only on formally taught scientific theories.",
      "Children cannot organize objects into categories."
    ]
  },
  {
    question: "What is the importance of social interaction in Vygotsky's theory?",
    answer: "Social interaction is crucial for the development of skills and understanding in children.",
    wrong: [
      "Social interaction prevents children from learning independently later.",
      "Social interaction matters only after formal schooling ends.",
      "Social interaction has no relationship to cognitive development."
    ]
  }
];
