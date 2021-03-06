const Queue = require('./queue');

function hotPotato({ elementsList, number }) {
  const queue = new Queue();
  const eliminatedList = [];

  // add all elements to queue
  for(let i = 0; i < elementsList.length ; i++) {
    queue.enqueue(elementsList[i]);
  }

  // stop game only when there is just one element left
  while(queue.size() > 1) {
    for(let i = 0; i < number; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  // return the only element left
  return {
    winner: queue.dequeue(),
    eliminated: eliminatedList,
  }
}

const names = ['John','Jack', 'Camilla', 'Ingrid', 'Carl'];
const result = hotPotato({ elementsList: names, number: 7 });
result.eliminated.forEach(name => console.log(`${name} was eliminated!`));
console.log(`The winner is: ${result.winner}!`);