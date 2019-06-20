class Restriction < ApplicationRecord
    belongs_to :room

    def self.createRestrictions(start_date, end_date, net_vacancies, room_id)
      start = Date.parse(start_date)
      finish = Date.parse(end_date)
      raise ArgumentError, "Start date must precede end date" if finish <= start
      restrictions = {}
      # existing_restrictions = Restriction.where(["(restriction_date between ? and ? ) and room_id = ?" ,
      #   start_date, end_date, room_id])
      # existing_restrictions.map{|restriction| restriction.destroy}
      start.upto(finish).map{|date| restrictions[date] = { room_id => Restriction.create(restriction_date: date, net_vacancies: net_vacancies, room_id: room_id) } }
      restrictions
    end
end
