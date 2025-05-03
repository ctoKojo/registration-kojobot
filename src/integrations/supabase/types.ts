export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      answers: {
        Row: {
          created_at: string
          id: string
          question_id: string
          response_id: string
          selected_ids: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          question_id: string
          response_id: string
          selected_ids: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          question_id?: string
          response_id?: string
          selected_ids?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_response_id_fkey"
            columns: ["response_id"]
            isOneToOne: false
            referencedRelation: "responses"
            referencedColumns: ["id"]
          },
        ]
      }
      options: {
        Row: {
          created_at: string
          display_order: number
          id: string
          is_correct: boolean
          question_id: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          id?: string
          is_correct?: boolean
          question_id: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          id?: string
          is_correct?: boolean
          question_id?: string
          text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "options_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          created_at: string
          display_order: number
          id: string
          image_url: string | null
          is_required: boolean
          points: number
          quiz_id: string
          text: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          id?: string
          image_url?: string | null
          is_required?: boolean
          points?: number
          quiz_id: string
          text: string
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          id?: string
          image_url?: string | null
          is_required?: boolean
          points?: number
          quiz_id?: string
          text?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_categories: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      quizzes: {
        Row: {
          category_id: string | null
          created_at: string
          created_by: string
          difficulty: string | null
          end_time: string
          group_id: number
          id: string
          is_published: boolean
          room: Database["public"]["Enums"]["room_type"]
          show_score: boolean
          start_time: string
          time_limit: number | null
          title: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          created_by: string
          difficulty?: string | null
          end_time: string
          group_id: number
          id?: string
          is_published?: boolean
          room: Database["public"]["Enums"]["room_type"]
          show_score?: boolean
          start_time: string
          time_limit?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          created_by?: string
          difficulty?: string | null
          end_time?: string
          group_id?: number
          id?: string
          is_published?: boolean
          room?: Database["public"]["Enums"]["room_type"]
          show_score?: boolean
          start_time?: string
          time_limit?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "quiz_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizzes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      responses: {
        Row: {
          created_at: string
          id: string
          quiz_id: string
          submitted_at: string
          total_score: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          quiz_id: string
          submitted_at?: string
          total_score?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          quiz_id?: string
          submitted_at?: string
          total_score?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "responses_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "responses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      student_registrations: {
        Row: {
          age: number
          agecategory: string
          childname: string
          contactconsent: string
          coursename: string | null
          created_at: string
          done_communication: boolean | null
          email: string | null
          grade: string
          guardianname: string
          hascomputer: string
          id: string
          mobilenumber: string
          preferredcoursetype: string
          previousprogramming: string
          row_num: number
          whatsappnumber: string | null
        }
        Insert: {
          age: number
          agecategory: string
          childname: string
          contactconsent: string
          coursename?: string | null
          created_at?: string
          done_communication?: boolean | null
          email?: string | null
          grade: string
          guardianname: string
          hascomputer: string
          id?: string
          mobilenumber: string
          preferredcoursetype: string
          previousprogramming: string
          row_num?: never
          whatsappnumber?: string | null
        }
        Update: {
          age?: number
          agecategory?: string
          childname?: string
          contactconsent?: string
          coursename?: string | null
          created_at?: string
          done_communication?: boolean | null
          email?: string | null
          grade?: string
          guardianname?: string
          hascomputer?: string
          id?: string
          mobilenumber?: string
          preferredcoursetype?: string
          previousprogramming?: string
          row_num?: never
          whatsappnumber?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          device_id: string | null
          group_id: number | null
          id: string
          name: string
          role: Database["public"]["Enums"]["user_role"]
          room: Database["public"]["Enums"]["room_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          device_id?: string | null
          group_id?: number | null
          id: string
          name: string
          role?: Database["public"]["Enums"]["user_role"]
          room: Database["public"]["Enums"]["room_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          device_id?: string | null
          group_id?: number | null
          id?: string
          name?: string
          role?: Database["public"]["Enums"]["user_role"]
          room?: Database["public"]["Enums"]["room_type"]
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_submit_quiz: {
        Args: { quiz_id: string; user_id: string }
        Returns: boolean
      }
      get_available_quizzes_for_student: {
        Args: { user_id: string }
        Returns: {
          id: string
          title: string
          room: Database["public"]["Enums"]["room_type"]
          group_id: number
          start_time: string
          end_time: string
          time_limit: number
          difficulty: string
          category_id: string
          created_at: string
        }[]
      }
    }
    Enums: {
      room_type: "kojo_one" | "kojo_two"
      user_role: "student" | "instructor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      room_type: ["kojo_one", "kojo_two"],
      user_role: ["student", "instructor"],
    },
  },
} as const
