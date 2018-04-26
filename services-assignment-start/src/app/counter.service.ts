export class CounterService{
	counter:number= 0;

	logChange(){
		console.log("Change number " + this.counter++);
	}
}