import AchievementStrategy from "./AchievementStrategy";
export default class GoldPlayerAchievement extends AchievementStrategy {
  constructor() {
    super(30, 'Gold Player');
  }
}