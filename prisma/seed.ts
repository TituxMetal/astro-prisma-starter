import { prismaClient } from '~/lib/prisma'

// Generate 5 sample tasks to seed in prisma database
const tasks = [
  {
    title: 'Add Prisma to the project',
    description: 'Add Prisma to the project',
    status: 'pending',
    dueDate: new Date('2024-10-15')
  },
  {
    title: 'Make a database schema',
    description: 'Make a database schema',
    status: 'pending',
    dueDate: new Date('2024-10-15')
  },
  {
    title: 'Add a form input component',
    description: 'Add a form input component',
    status: 'pending',
    dueDate: new Date('2024-10-15')
  },
  {
    title: 'Add an api route to create a new task',
    description: 'Add an api route to create a new task',
    status: 'pending',
    dueDate: new Date('2024-10-15')
  },
  {
    title: 'Add an api route to get all tasks',
    description: 'Add an api route to get all tasks',
    status: 'pending',
    dueDate: new Date('2024-10-15')
  }
]

const seed = async () => {
  console.log('Start seeding ...')

  // Delete existing tasks
  await prismaClient.task.deleteMany()
  console.log('Deleted existing tasks')

  // Create new tasks
  for (const task of tasks) {
    const createdTask = await prismaClient.task.create({
      data: task
    })
    console.log(`Created task with id: ${createdTask.id}`)
  }

  console.log('Seeding finished')
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })
