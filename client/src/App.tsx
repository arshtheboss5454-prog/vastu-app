import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ResidentialVastu from "@/pages/ResidentialVastu";
import CommercialVastu from "@/pages/CommercialVastu";
import IndustrialVastu from "@/pages/IndustrialVastu";
import Yogdaan from "@/pages/Yogdaan";
import BookConsultation from "@/pages/BookConsultation";
import OurProcess from "@/pages/OurProcess";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/residential" component={ResidentialVastu} />
      <Route path="/commercial" component={CommercialVastu} />
      <Route path="/industrial" component={IndustrialVastu} />
      <Route path="/yogdaan" component={Yogdaan} />
      <Route path="/consultation" component={BookConsultation} />
      <Route path="/process" component={OurProcess} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
