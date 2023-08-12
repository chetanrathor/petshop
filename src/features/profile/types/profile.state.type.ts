export type ActiveTab = "myprofile" | "shipping" | "order" | "consultation"

export interface ProfileTabReducer {
    activeTab: ActiveTab
}