import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const menuData = {
  antipasti: [
    { name: "Bruschetta al Pomodoro", description: "Grilled bread, San Marzano tomatoes, fresh basil, garlic, extra virgin olive oil", price: "$14" },
    { name: "Burrata e Prosciutto", description: "Creamy burrata, prosciutto di Parma, arugula, balsamic glaze, grilled crostini", price: "$18" },
    { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef, arugula, capers, shaved Parmigiano-Reggiano, truffle aioli", price: "$19" },
    { name: "Calamari Fritti", description: "Crispy fried calamari, marinara sauce, lemon aioli, fresh lemon", price: "$16" },
    { name: "Arancini Siciliani", description: "Crispy risotto balls, ragu, peas, mozzarella, tomato sauce", price: "$15" },
    { name: "Polpette della Nonna", description: "Grandmother's meatballs, San Marzano tomato sauce, ricotta, basil", price: "$16" },
  ],
  insalate: [
    { name: "Insalata Mista", description: "Mixed greens, cherry tomatoes, cucumber, red onion, house vinaigrette", price: "$12" },
    { name: "Caesar Classico", description: "Romaine hearts, house-made Caesar dressing, Parmigiano-Reggiano, garlic croutons", price: "$14" },
    { name: "Caprese", description: "Fresh mozzarella di bufala, heirloom tomatoes, basil, extra virgin olive oil, balsamic", price: "$17" },
    { name: "Insalata di Rucola", description: "Baby arugula, cherry tomatoes, shaved fennel, lemon vinaigrette, shaved Parmigiano", price: "$14" },
  ],
  pizze: [
    { name: "Margherita DOC", description: "San Marzano tomato sauce, mozzarella di bufala, fresh basil, extra virgin olive oil", price: "$18" },
    { name: "Diavola", description: "Tomato sauce, mozzarella, spicy salami, Calabrian chilies, honey", price: "$21" },
    { name: "Quattro Formaggi", description: "Mozzarella, Gorgonzola, fontina, Parmigiano-Reggiano, white base", price: "$20" },
    { name: "Prosciutto e Rucola", description: "White base, mozzarella, prosciutto di Parma, arugula, shaved Parmigiano, balsamic glaze", price: "$22" },
    { name: "Tartufata", description: "White base, mozzarella, wild mushrooms, truffle oil, thyme, Parmigiano-Reggiano", price: "$23" },
    { name: "Capricciosa", description: "Tomato sauce, mozzarella, artichokes, mushrooms, prosciutto cotto, olives", price: "$22" },
  ],
  primi: [
    { name: "Spaghetti Carbonara", description: "Guanciale, Pecorino Romano, farm egg, black pepper (no cream)", price: "$24" },
    { name: "Pappardelle al Ragu", description: "Wide ribbon pasta, slow-cooked beef and pork ragu, Parmigiano-Reggiano", price: "$26" },
    { name: "Risotto ai Funghi Porcini", description: "Carnaroli rice, porcini mushrooms, white wine, Parmigiano-Reggiano, truffle oil", price: "$28" },
    { name: "Linguine alle Vongole", description: "Fresh clams, white wine, garlic, parsley, extra virgin olive oil", price: "$27" },
    { name: "Ravioli di Ricotta e Spinaci", description: "House-made ravioli, ricotta and spinach filling, brown butter, sage, pine nuts", price: "$25" },
    { name: "Osso Buco Risotto", description: "Braised veal shank, saffron risotto, gremolata", price: "$34" },
    { name: "Gnocchi Sorrentina", description: "Potato gnocchi, San Marzano tomato sauce, mozzarella, basil, Parmigiano", price: "$24" },
  ],
  secondi: [
    { name: "Bistecca alla Fiorentina", description: "Grilled T-bone steak (for two, min. 32oz), rosemary potatoes, grilled vegetables", price: "$85" },
    { name: "Branzino al Forno", description: "Whole roasted Mediterranean sea bass, lemon, herbs, roasted potatoes", price: "$38" },
    { name: "Saltimbocca alla Romana", description: "Veal scaloppine, prosciutto di Parma, fresh sage, white wine sauce, mashed potatoes", price: "$36" },
    { name: "Agnello alle Erbe", description: "Herb-crusted rack of lamb, rosemary jus, polenta, seasonal vegetables", price: "$42" },
    { name: "Pollo al Mattone", description: "Brick-pressed chicken, lemon, rosemary, roasted fingerling potatoes", price: "$28" },
    { name: "Branzino in Cartoccio", description: "Mediterranean sea bass baked in parchment, cherry tomatoes, olives, capers, white wine", price: "$36" },
  ],
  contorni: [
    { name: "Patatine al Rosmarino", description: "Rosemary roasted potatoes, sea salt", price: "$8" },
    { name: "Spinaci Saltati", description: "Sautéed spinach, garlic, extra virgin olive oil", price: "$9" },
    { name: "Verdure Grigliate", description: "Grilled seasonal vegetables, balsamic glaze", price: "$10" },
    { name: "Polenta Cremosa", description: "Creamy polenta, Parmigiano-Reggiano, black pepper", price: "$9" },
    { name: "Fagiolini", description: "Green beans, garlic, lemon, extra virgin olive oil", price: "$9" },
  ],
  dolci: [
    { name: "Tiramisu Classico", description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder (house-made)", price: "$12" },
    { name: "Panna Cotta", description: "Vanilla bean panna cotta, mixed berry coulis", price: "$11" },
    { name: "Cannoli Siciliani", description: "Crispy shells, sweet ricotta, chocolate chips, pistachios, powdered sugar", price: "$12" },
    { name: "Affogato al Caffè", description: "Vanilla gelato, hot espresso shot, amaretti cookie", price: "$10" },
    { name: "Torta della Nonna", description: "Grandmother's custard tart, pine nuts, powdered sugar", price: "$12" },
    { name: "Gelato e Sorbetto", description: "Three scoops, ask server for daily flavors", price: "$10" },
  ],
  menuDegustazione: [
    { name: "Menu Degustazione Tradizione", description: "5-course tasting menu: Antipasti, Primi, Secondi, Contorni, Dolci", price: "$85 per person" },
    { name: "Menu Degustazione Chef Riccardo", description: "7-course chef's selection featuring seasonal specialties and family recipes", price: "$110 per person" },
    { name: "Wine Pairing", description: "Sommelier-selected wine pairing for either tasting menu", price: "$55 per person" },
  ],
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-cream text-cream bg-transparent">
              Our Menu
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Authentic Northern Italian Cuisine
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Every dish crafted with imported Italian ingredients and time-honored recipes
              passed down through generations.
            </p>
          </div>
        </section>

        {/* Menu Tabs */}
        <section className="py-12 md:py-16">
          <div className="container max-w-5xl px-4 md:px-6">
            <Tabs defaultValue="antipasti" className="w-full">
              <ScrollArea className="w-full">
                <TabsList className="w-full justify-start bg-transparent gap-2 p-0">
                  {[
                    { value: "antipasti", label: "Antipasti" },
                    { value: "insalate", label: "Insalate" },
                    { value: "pizze", label: "Pizze" },
                    { value: "primi", label: "Primi" },
                    { value: "secondi", label: "Secondi" },
                    { value: "contorni", label: "Contorni" },
                    { value: "dolci", label: "Dolci" },
                    { value: "menu-degustazione", label: "Menu Degustazione" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-wine data-[state=active]:text-white whitespace-nowrap px-4 py-2"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>

              {/* Antipasti */}
              <TabsContent value="antipasti" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Antipasti</h2>
                    <p className="text-muted-foreground">Traditional starters to awaken your palate</p>
                  </div>
                  {menuData.antipasti.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Insalate */}
              <TabsContent value="insalate" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Insalate</h2>
                    <p className="text-muted-foreground">Fresh salads with house-made dressings</p>
                  </div>
                  {menuData.insalate.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Pizze */}
              <TabsContent value="pizze" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Pizze</h2>
                    <p className="text-muted-foreground">Wood-fired pizzas with imported Italian ingredients</p>
                  </div>
                  {menuData.pizze.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Primi */}
              <TabsContent value="primi" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Primi</h2>
                    <p className="text-muted-foreground">Handmade pasta and risotto creations</p>
                  </div>
                  {menuData.primi.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Secondi */}
              <TabsContent value="secondi" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Secondi</h2>
                    <p className="text-muted-foreground">Prime cuts and fresh seafood</p>
                  </div>
                  {menuData.secondi.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Contorni */}
              <TabsContent value="contorni" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Contorni</h2>
                    <p className="text-muted-foreground">Side dishes to complement your meal</p>
                  </div>
                  {menuData.contorni.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Dolci */}
              <TabsContent value="dolci" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Dolci</h2>
                    <p className="text-muted-foreground">House-made Italian desserts</p>
                  </div>
                  {menuData.dolci.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              {/* Menu Degustazione */}
              <TabsContent value="menu-degustazione" className="mt-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-heading text-3xl font-bold text-wine mb-2">Menu Degustazione</h2>
                    <p className="text-muted-foreground">Chef&apos;s tasting menus for the full experience</p>
                  </div>
                  {menuData.menuDegustazione.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Our Cuisine?
            </h2>
            <p className="text-cream/70 mb-8">
              Reserve your table today and let us treat you like family.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-wine text-white rounded-md font-medium hover:bg-wine-light transition-colors"
            >
              Make a Reservation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MenuItem({ item }: { item: { name: string; description: string; price: string } }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <h3 className="font-heading text-xl font-semibold text-charcoal">{item.name}</h3>
        <p className="text-muted-foreground mt-1">{item.description}</p>
      </div>
      <span className="font-semibold text-wine whitespace-nowrap">{item.price}</span>
    </div>
  );
}
