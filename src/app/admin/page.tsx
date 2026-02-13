
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await auth();
    // Middleware already checks role, but double check doesn't hurt
    if (session?.user?.role !== "ADMIN" && session?.user?.role !== "OWNER") {
        redirect("/");
    }

    // Fetch Real Stats
    const userCount = await prisma.user.count();
    const commentCount = await prisma.comment.count();
    const chronicleCount = await prisma.chronicle.count();
    const experienceCount = await prisma.experience.count();

    // Fake revenue for "hyper-realistic" feel (since this is a free app)
    const monthlyRevenue = (userCount * 0.5).toFixed(2);
    const activeUsers = Math.floor(userCount * 0.4);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900 dark:text-white">Genel Bakış</h1>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">Sistem durumunu ve istatistikleri buradan takip edebilirsiniz.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-stone-900 dark:bg-stone-800 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                        Rapor İndir
                    </button>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                        Yeni Kampanya
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Toplam Kullanıcı"
                    value={userCount.toLocaleString()}
                    trend="+12%"
                    trendUp={true}
                    icon={<UserIcon />}
                    color="blue"
                />
                <StatCard
                    title="Aktif Oturumlar"
                    value={activeUsers.toLocaleString()}
                    trend="+5%"
                    trendUp={true}
                    icon={<ActivityIcon />}
                    color="green"

                />
                <StatCard
                    title="Toplam Yorum"
                    value={commentCount.toLocaleString()}
                    trend="+24%"
                    trendUp={true}
                    icon={<MessageIcon />}
                    color="orange"
                />
                <StatCard
                    title="Kronik Bildirimler"
                    value={chronicleCount.toLocaleString()}
                    trend="+8%"
                    trendUp={true}
                    icon={<AlertIcon />}
                    color="red"
                />
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-6">Trafik Analizi (Son 7 Gün)</h3>
                    <div className="h-[300px] flex items-end justify-between gap-2 px-2">
                        {[45, 60, 75, 50, 80, 95, 85].map((h, i) => (
                            <div key={i} className="w-full bg-orange-100 dark:bg-orange-950/30 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 inset-x-0 bg-orange-500 rounded-t-lg transition-all duration-500 group-hover:bg-orange-600"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                                        {h * 15} Ziyaretçi
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-stone-500 font-medium">
                        <span>Pazartesi</span>
                        <span>Salı</span>
                        <span>Çarşamba</span>
                        <span>Perşembe</span>
                        <span>Cuma</span>
                        <span>Cumartesi</span>
                        <span>Pazar</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-6">Kullanıcı Dağılımı</h3>
                    <div className="space-y-6">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                                        Mobil
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-orange-600">
                                        72%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-stone-200 dark:bg-stone-800">
                                <div style={{ width: "72%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        Masaüstü
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-blue-600">
                                        28%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-stone-200 dark:bg-stone-800">
                                <div style={{ width: "28%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
                        <p className="text-sm font-medium text-stone-500 mb-4">Son İşlemler</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-xs">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-stone-700 dark:text-stone-300">Yeni üye kaydı: Ahmet Y.</span>
                                <span className="ml-auto text-stone-400">2dk önce</span>
                            </li>
                            <li className="flex items-center gap-3 text-xs">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-stone-700 dark:text-stone-300">Yorum onaylandı: Honda Civic</span>
                                <span className="ml-auto text-stone-400">15dk önce</span>
                            </li>
                            <li className="flex items-center gap-3 text-xs">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                <span className="text-stone-700 dark:text-stone-300">Hatalı giriş denemesi</span>
                                <span className="ml-auto text-stone-400">1s önce</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, trend, trendUp, icon, color }: any) {
    const colorClasses: any = {
        blue: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
        green: "text-green-600 bg-green-100 dark:bg-green-900/30",
        orange: "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
        red: "text-red-600 bg-red-100 dark:bg-red-900/30",
    };

    return (
        <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">{title}</p>
                    <h3 className="text-2xl font-bold text-stone-900 dark:text-white mt-1">{value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <span className={`text-xs font-semibold ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {trend}
                </span>
                <span className="text-xs text-stone-400">geçen aya göre</span>
            </div>
        </div>
    );
}

// Icons (Simple SVGs)
const UserIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const ActivityIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const MessageIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const AlertIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
