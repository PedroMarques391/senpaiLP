'use client';

export default function PaymentButton({
    title,
    price,
    text,
}: {
    title: string;
    price: string;
    text: string;
}) {
    async function handleClick() {
        const body = {
            additional_info: {
                items: [
                    {
                        id: 'MLB2907679857',
                        title: title,
                        description: text,
                        category_id: 'electronics',
                        quantity: 1,
                        unit_price: parseFloat(price),
                    }
                ],
                payer: {
                    first_name: 'Test',
                    last_name: 'Test',
                    phone: {
                        area_code: '11',
                        number: '987654321'
                    },
                    address: {
                        street_number: null
                    }
                },
                shipments: {
                    receiver_address: {
                        zip_code: '12312-123',
                        state_name: 'Rio de Janeiro',
                        city_name: 'Buzios',
                        street_name: 'Av das Nacoes Unidas',
                        street_number: 3003
                    }
                }
            },
            payer: {
                entity_type: 'individual',
                type: 'customer',
                email: 'test_user_123@testuser.com',
                identification: {
                    type: 'CPF',
                    number: '95749019047'
                }
            },
            payment_method_id: 'pix',
            transaction_amount: parseFloat(price)
        }


        console.log("antes da req")

        await fetch('/api/payment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(async (response) => {
                console.log("apos a req");
                const res = await response.json()
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // if (result.init_point) {
        //     window.location.href = result.init_point; // redireciona pro checkout
        // }

    }

    return (
        <button
            onClick={handleClick}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-content-inverse text-lg font-bold rounded-full transition"
        >
            {text}
        </button>
    );
}
