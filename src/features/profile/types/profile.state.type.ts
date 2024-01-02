export type ActiveTab = "myprofile" | "shipping" | "order" | "consultation";

interface Shipping {
    isDefault: boolean;
    title: string;
    recipientName: string;
    email: string;
    phone: string;
    state: string;
    city: string;
    zip: string;
    street_address: string;
}

interface Consultation {
    startTime: Date;
    endTime: Date;
    total: number;
    // meetingStatus: MeetingStatus;
    // consultancyStatus: ConsultancyStatus;
    // vet: UserEntity;
    // appointment: Appointment;
}

interface Order {
    total: number;
    shippingCharge: number;
    // paymentType: PaymentType;
    // user: UserEntity;
    // orderItems: OrderItem[];
}

export interface ProfileTabReducer {
    activeTab: ActiveTab,
    shippings: Shipping[],
    consultations: Consultation[],
    orders: Order[]


}