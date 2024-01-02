
export interface AddressType {
    id: string; // If 'id' is of type string in your entity
    title: string;
    recipientName: string;
    email: string;
    phone: string;
    state: string;
    city: string;
    zip: string;
    street_address: string;
    isDefault: boolean;

}
export interface CreateAddress extends Omit<AddressType, 'id' | 'isDefault'> {
    userId: string;
}

export interface UpdateAddress extends Partial<Omit<AddressType, 'userId'>> {
    id: string,
    isDefault: boolean
}

export interface AddressState {
    address: AddressType[]
}