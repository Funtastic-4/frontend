import { Globe, Shield, Target, History } from "lucide-react"
import { Card, CardContent } from "~/components/ui/card"

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#8c1817] to-[#a91e1d] text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang InaGo</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Menghubungkan wisatawan dengan kekayaan budaya Indonesia melalui kolaborasi dengan NGO lokal
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {/* Definition Section */}
                <section>
                    <Card className="border-red-200 shadow-lg">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <Globe className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa itu InaGo?</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                <p className="text-xl text-center mb-6">
                                    InaGo adalah platform inovatif yang menghubungkan wisatawan dengan warisan budaya Indonesia melalui
                                    kemitraan strategis dengan NGO lokal di berbagai daerah.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Impact & Image Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="order-2 lg:order-1 flex items-center">
                        <div>
                            <img
                                src="/about-us-1.png?height=400&width=500"
                                alt="InaGo Cultural Experience"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Source: <a href="https://www.rukita.co/stories/wp-content/uploads/2022/05/akurat_20180924040313_705U9K-1.webp" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline">rukita.co</a>
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <div className="mb-6">
                            <Target className="w-10 h-10 text-red-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-0">Dampak yang Ingin Kami Berikan</h3>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                Melalui InaGo, kami berkomitmen untuk membantu melestarikan tradisi dan warisan budaya yang terancam
                                punah dengan melibatkan wisatawan dalam pengalaman budaya yang autentik dan bermakna. Platform kami
                                dirancang untuk memberikan dampak positif jangka panjang bagi komunitas lokal dan pelestarian budaya
                                Indonesia.
                            </p>
                            <p>
                                Kami fokus pada pemberdayaan masyarakat dengan memberikan peluang ekonomi bagi komunitas lokal melalui
                                pariwisata budaya yang berkelanjutan. Setiap program yang kami tawarkan dirancang untuk memastikan bahwa
                                manfaat ekonomi langsung dirasakan oleh masyarakat setempat, terutama para pengrajin, seniman, dan
                                pelaku budaya tradisional.
                            </p>
                            {/* <p>
                                Sebagai bagian dari misi edukasi global, InaGo berperan dalam mengenalkan kekayaan budaya Indonesia
                                kepada dunia internasional. Kami percaya bahwa dengan meningkatkan pemahaman dan apresiasi terhadap
                                budaya Indonesia, kita dapat menciptakan kesadaran global tentang pentingnya pelestarian warisan budaya
                                untuk generasi mendatang.
                            </p> */}
                        </div>
                    </div>
                </section>

                {/* Background Story & Image Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="order-1 flex flex-col justify-center">
                        <div className="mb-6">
                            <History className="w-10 h-10 text-red-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Latar Belakang InaGo</h3>
                        </div>
                        <div className="prose text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Pembuatan InaGo dilatarbelakangi oleh keprihatinan terhadap semakin pudarnya warisan budaya Indonesia di
                                era modernisasi. Banyak tradisi dan pengetahuan lokal yang mulai terlupakan karena kurangnya dokumentasi
                                dan transmisi kepada generasi muda.
                            </p>
                            <p>
                                Kami melihat potensi besar dalam menggabungkan teknologi modern dengan kearifan lokal, menciptakan
                                platform yang tidak hanya melestarikan budaya tetapi juga memberikan manfaat ekonomi bagi masyarakat
                                setempat. Pendekatan ini memungkinkan kita untuk menjaga autentisitas budaya sambil membuatnya relevan
                                dan dapat diakses oleh generasi digital.
                            </p>
                            {/* <p>
                                Melalui kemitraan dengan NGO lokal, kami memastikan bahwa setiap program yang ditawarkan memiliki dampak
                                positif yang berkelanjutan bagi komunitas dan pelestarian budaya. Kolaborasi ini juga memastikan bahwa
                                suara dan kepentingan masyarakat lokal selalu menjadi prioritas utama dalam setiap inisiatif yang kami
                                lakukan.
                            </p> */}
                        </div>
                    </div>

                    <div className="order-2 flex items-center">
                        <div>
                            <img
                                src="/reog-ponorogo.jpg?height=400&width=500"
                                alt="Traditional Indonesian Artisans"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Source: <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoprankmedia.id%2Fnews%2Freog-ponorogo%2F&psig=AOvVaw0eKB28EOZHyxdaf7--G7lF&ust=1753508553058000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCE3cim144DFQAAAAAdAAAAABAE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 underline">toprankmedia.id</a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Terms & Conditions Section */}
                <section>
                    <Card className="border-red-200 shadow-lg bg-gradient-to-r from-red-50 to-white">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Syarat & Ketentuan</h2>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white p-6 rounded-lg border border-red-100 mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Kemitraan dengan NGO</h3>
                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            Data dan informasi budaya yang kami tampilkan adalah hasil kerjasama dengan NGO lokal yang telah
                                            terverifikasi dan memiliki kredibilitas dalam pelestarian budaya di daerah masing-masing. Setiap
                                            NGO partner memiliki kontrol penuh atas konten budaya yang mereka sediakan dan berhak untuk
                                            memperbarui informasi kapan saja sesuai dengan perkembangan dan kebutuhan komunitas mereka.
                                        </p>
                                        <p>
                                            Dalam kemitraan ini, kami menerapkan sistem pembagian revenue yang adil dan transparan, memastikan
                                            bahwa NGO partner menerima kompensasi yang sesuai dengan kontribusi mereka. InaGo bertanggung
                                            jawab penuh dalam melakukan verifikasi akurasi informasi yang disajikan, memberikan perlindungan
                                            data pengguna sesuai dengan standar internasional, dan menyediakan dukungan teknis platform yang
                                            berkelanjutan.
                                        </p>
                                        <p>
                                            Kami berkomitmen untuk menjaga hubungan kemitraan yang saling menguntungkan dan berkelanjutan,
                                            dengan selalu mengutamakan kepentingan pelestarian budaya dan kesejahteraan masyarakat lokal.
                                            Setiap keputusan strategis yang berkaitan dengan konten budaya selalu melibatkan NGO partner
                                            sebagai pihak yang paling memahami konteks lokal dan kebutuhan komunitas.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-600 text-sm">
                                        Dengan menggunakan platform InaGo, Anda menyetujui untuk menghormati budaya lokal dan berkontribusi
                                        pada pelestarian warisan Indonesia.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}

export default AboutUs
