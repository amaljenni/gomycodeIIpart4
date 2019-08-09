
export default class Human{
    name;
  job;
  skills = [];

  getJob(job) {
    console.log(`${(this.job = job)}`);
  }
  leaveJob() {
    console.log("unemployed");
  }
  learnNewSkill(skill) {
    console.log(`${(this.skills = skill)}`);
  }
  forgetNewSkill(skill) {
    let index = this.skills.indexOf(skill);
    let arr = this.skills;
    console.log(`${arr.splice(index, 1)}`);
  }

}
